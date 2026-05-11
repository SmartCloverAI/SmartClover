import test from 'node:test';
import assert from 'node:assert/strict';

import {
  buildLlmsFullTxt,
  buildLlmsTxt,
  getPublicMcpResources,
  readPublicMcpResource
} from '../lib/agent-artifacts.mjs';
import { handleMcpJsonRpcRequest, MCP_PROTOCOL_VERSION } from '../lib/mcp-server.mjs';

test('public MCP resources cover flagship, trust, and contact artifacts', () => {
  const resources = getPublicMcpResources();
  const uris = new Set(resources.map((resource) => resource.uri));

  assert.ok(uris.has('smartclover://facts/company-profile'));
  assert.ok(uris.has('smartclover://products/cerviguard'));
  assert.ok(uris.has('smartclover://trust/security'));
  assert.ok(uris.has('smartclover://contact/qualification'));
});

test('public MCP resource reads return markdown text with a canonical URL', () => {
  const resource = readPublicMcpResource('smartclover://products/cerviguard');

  assert.equal(resource.mimeType, 'text/markdown');
  assert.match(resource.text, /CerviGuard/);
  assert.match(resource.text, /https:\/\/smartclover\.ro\/cerviguard/);
});

test('llms outputs mention the MCP endpoint and key public surfaces', () => {
  const llmsTxt = buildLlmsTxt();
  const llmsFullTxt = buildLlmsFullTxt();

  assert.match(llmsTxt, /https:\/\/smartclover\.ro\/mcp/);
  assert.match(llmsTxt, /https:\/\/smartclover\.ro\/cerviguard/);
  assert.match(llmsFullTxt, /https:\/\/smartclover\.ro\/trust\/security/);
  assert.match(llmsFullTxt, /https:\/\/cerviguard\.link/);
});

test('agent-facing artifacts preserve product-status and claim-safety wording', () => {
  const cerviguardResource = readPublicMcpResource('smartclover://products/cerviguard');
  const generatedText = [
    buildLlmsTxt(),
    buildLlmsFullTxt(),
    ...getPublicMcpResources().map((resource) => readPublicMcpResource(resource.uri)?.text ?? '')
  ].join('\n');

  assert.match(cerviguardResource.text, /flagship live product/);
  assert.match(cerviguardResource.text, /metadata and confidence values for clinician review/);
  assert.match(buildLlmsTxt(), /CerviGuard as its flagship live product/);
  assert.match(buildLlmsTxt(), /CerviGuard live product surface/);
  assert.match(buildLlmsTxt(), /DataGems as a live research pilot/);

  assert.doesNotMatch(cerviguardResource.text, /CerviGuard live pilot|transparent signals|transformation-zone|lesion classification/i);
  assert.doesNotMatch(
    generatedText,
    /human-in-the-loop|TealGuard partnership|diligence-ready|trust-ready|company profile|public record|support evaluation|stakeholders|approved MDR|final MDR|certified|guaranteed|end-to-end encryption|immutable traceability|aligned with applicable NIS2\/CRA expectations|no centralized clinical payload repository/i
  );
});

test('initialize advertises a read-only resource server', () => {
  const response = handleMcpJsonRpcRequest({
    jsonrpc: '2.0',
    id: 1,
    method: 'initialize',
    params: {
      protocolVersion: MCP_PROTOCOL_VERSION,
      capabilities: {},
      clientInfo: {
        name: 'unit-test-client',
        version: '1.0.0'
      }
    }
  });

  assert.equal(response.result.protocolVersion, MCP_PROTOCOL_VERSION);
  assert.equal(response.result.serverInfo.name, 'smartclover-public-site');
  assert.deepEqual(response.result.capabilities.resources, {
    listChanged: false,
    subscribe: false
  });
});

test('resources/list returns the public SmartClover resource catalog', () => {
  const response = handleMcpJsonRpcRequest({
    jsonrpc: '2.0',
    id: 2,
    method: 'resources/list',
    params: {}
  });

  assert.ok(Array.isArray(response.result.resources));
  assert.ok(response.result.resources.length >= 6);
  assert.ok(
    response.result.resources.some((resource) => resource.uri === 'smartclover://trust/privacy-policy')
  );
});

test('resources/read returns the requested markdown resource', () => {
  const response = handleMcpJsonRpcRequest({
    jsonrpc: '2.0',
    id: 3,
    method: 'resources/read',
    params: {
      uri: 'smartclover://facts/company-profile'
    }
  });

  assert.equal(response.result.contents.length, 1);
  assert.equal(response.result.contents[0].mimeType, 'text/markdown');
  assert.match(response.result.contents[0].text, /SmartClover/);
});

test('resources/read returns a protocol error for unknown resources', () => {
  const response = handleMcpJsonRpcRequest({
    jsonrpc: '2.0',
    id: 4,
    method: 'resources/read',
    params: {
      uri: 'smartclover://missing/resource'
    }
  });

  assert.equal(response.error.code, -32002);
  assert.match(response.error.message, /Resource not found/);
});
