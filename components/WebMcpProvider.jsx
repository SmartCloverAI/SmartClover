import { useEffect } from 'react';

const siteRouteMap = {
  home: '/',
  about: '/about',
  cerviguard: '/cerviguard',
  products: '/products',
  trust: '/trust',
  pricing: '/pricing',
  contact: '/contact',
  contact_form: '/contact#inquiry-form',
  blog: '/blog'
};

const publicArtifactMap = {
  cerviguard_live_pilot: 'https://cerviguard.link',
  cerviguard_github: 'https://github.com/SmartCloverAI/CerviGuard',
  smartclover_huggingface: 'https://huggingface.co/smartclover',
  gender_equality_plan_pdf: '/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf'
};

const buildToolResult = (message, href) => ({
  ok: true,
  message,
  href
});

const openHref = (href) => {
  window.location.assign(href);
};

const tools = [
  {
    name: 'open_route',
    title: 'Open SmartClover route',
    description: 'Navigate to a key SmartClover route such as the homepage, product pages, trust center, blog, or contact hub.',
    inputSchema: {
      type: 'object',
      properties: {
        route: {
          type: 'string',
          enum: Object.keys(siteRouteMap),
          description: 'The SmartClover route to open.'
        }
      },
      required: ['route'],
      additionalProperties: false
    },
    execute: async ({ route }) => {
      const href = siteRouteMap[route] || siteRouteMap.contact_form;
      openHref(href);
      return buildToolResult(`Opened ${href}.`, href);
    }
  },
  {
    name: 'open_public_artifact',
    title: 'Open SmartClover public artifact',
    description: 'Open an external SmartClover artifact such as the live CerviGuard pilot, GitHub repository, Hugging Face profile, or public PDF.',
    inputSchema: {
      type: 'object',
      properties: {
        artifact: {
          type: 'string',
          enum: Object.keys(publicArtifactMap),
          description: 'The public artifact to open.'
        }
      },
      required: ['artifact'],
      additionalProperties: false
    },
    execute: async ({ artifact }) => {
      const href = publicArtifactMap[artifact] || publicArtifactMap.cerviguard_live_pilot;
      openHref(href);
      return buildToolResult(`Opened ${href}.`, href);
    }
  },
  {
    name: 'jump_to_contact_form',
    title: 'Jump to SmartClover contact form',
    description: 'Open the SmartClover contact page and focus the structured inquiry form used for demos, pilots, research, and investor outreach.',
    inputSchema: {
      type: 'object',
      properties: {},
      additionalProperties: false
    },
    execute: async () => {
      if (window.location.pathname === '/contact') {
        document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.querySelector('#inquiry-form input, #inquiry-form select, #inquiry-form textarea')?.focus();
        return buildToolResult('Focused the SmartClover contact inquiry form.', '/contact#inquiry-form');
      }

      openHref('/contact#inquiry-form');
      return buildToolResult('Opened the SmartClover contact inquiry form.', '/contact#inquiry-form');
    }
  }
];

const unregisterTools = (modelContext) => {
  if (typeof modelContext?.unregisterTool !== 'function') {
    return;
  }

  tools.forEach((tool) => {
    try {
      modelContext.unregisterTool(tool.name);
    } catch {
      // Ignore duplicate cleanup attempts in dev strict-mode remounts.
    }
  });
};

const WebMcpProvider = () => {
  useEffect(() => {
    const modelContext = window.navigator?.modelContext;

    if (!modelContext) {
      return undefined;
    }

    if (typeof modelContext.provideContext === 'function') {
      modelContext.provideContext({ tools });
      return () => {
        modelContext.provideContext({ tools: [] });
      };
    }

    if (typeof modelContext.registerTool === 'function') {
      tools.forEach((tool) => {
        try {
          modelContext.registerTool(tool);
        } catch {
          // Avoid breaking page boot if a preview browser keeps a stale registration.
        }
      });

      return () => {
        unregisterTools(modelContext);
      };
    }

    return undefined;
  }, []);

  return null;
};

export default WebMcpProvider;
