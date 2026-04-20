import { getPublicMcpResources, readPublicMcpResource } from './agent-artifacts.mjs';

export const MCP_PROTOCOL_VERSION = '2025-11-25';

const createSuccessResponse = (id, result) => ({
  jsonrpc: '2.0',
  id,
  result
});

const createErrorResponse = (id, code, message, data) => ({
  jsonrpc: '2.0',
  id,
  error: {
    code,
    message,
    ...(data ? { data } : {})
  }
});

const buildInitializeResult = (siteVersion = '0.0.0') => ({
  protocolVersion: MCP_PROTOCOL_VERSION,
  capabilities: {
    prompts: {
      listChanged: false
    },
    resources: {
      listChanged: false,
      subscribe: false
    },
    tools: {
      listChanged: false
    }
  },
  serverInfo: {
    name: 'smartclover-public-site',
    title: 'SmartClover Public Site',
    version: siteVersion
  }
});

const isNotification = (message) => !Object.prototype.hasOwnProperty.call(message, 'id');

export const handleMcpJsonRpcRequest = (message, { siteVersion = '0.0.0' } = {}) => {
  const method = message?.method;
  const id = message?.id ?? null;
  const params = message?.params ?? {};

  if (typeof method !== 'string' || message?.jsonrpc !== '2.0') {
    return createErrorResponse(id, -32600, 'Invalid Request');
  }

  if (isNotification(message)) {
    if (method === 'notifications/initialized' || method === 'notifications/cancelled') {
      return null;
    }
  }

  switch (method) {
    case 'initialize':
      return createSuccessResponse(id, buildInitializeResult(siteVersion));
    case 'ping':
      return createSuccessResponse(id, {});
    case 'prompts/list':
      return createSuccessResponse(id, { prompts: [] });
    case 'tools/list':
      return createSuccessResponse(id, { tools: [] });
    case 'resources/list':
      return createSuccessResponse(id, { resources: getPublicMcpResources() });
    case 'resources/read': {
      const uri = typeof params.uri === 'string' ? params.uri : null;

      if (!uri) {
        return createErrorResponse(id, -32602, 'Invalid params', {
          reason: 'uri is required'
        });
      }

      const resource = readPublicMcpResource(uri);

      if (!resource) {
        return createErrorResponse(id, -32002, 'Resource not found', { uri });
      }

      return createSuccessResponse(id, {
        contents: [resource]
      });
    }
    default:
      return createErrorResponse(id, -32601, `Method not found: ${method}`);
  }
};
