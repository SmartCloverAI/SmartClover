import versionData from '../../version.json';
import { handleMcpJsonRpcRequest, MCP_PROTOCOL_VERSION } from '../../lib/mcp-server.mjs';

const setCommonHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, MCP-Protocol-Version, Last-Event-ID');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Accept-Post', 'application/json');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.setHeader('MCP-Protocol-Version', MCP_PROTOCOL_VERSION);
};

const parseRequestBody = (req) => {
  if (typeof req.body === 'string') {
    return JSON.parse(req.body);
  }

  return req.body;
};

export default function handler(req, res) {
  setCommonHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method === 'GET') {
    res.setHeader('Allow', 'GET, POST, OPTIONS');
    return res.status(405).json({
      error: 'This read-only MCP endpoint accepts JSON-RPC over HTTP POST. SSE GET streams are not enabled.'
    });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST, OPTIONS');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  let message;

  try {
    message = parseRequestBody(req);
  } catch {
    return res.status(400).json({
      jsonrpc: '2.0',
      id: null,
      error: {
        code: -32700,
        message: 'Parse error'
      }
    });
  }

  if (!message || typeof message !== 'object' || Array.isArray(message)) {
    return res.status(400).json({
      jsonrpc: '2.0',
      id: null,
      error: {
        code: -32600,
        message: 'Invalid Request'
      }
    });
  }

  const response = handleMcpJsonRpcRequest(message, {
    siteVersion: versionData.version
  });

  if (response === null || !Object.prototype.hasOwnProperty.call(message, 'id')) {
    return res.status(202).end();
  }

  return res.status(200).json(response);
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb'
    }
  }
};
