System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: async function () {
      // Auto generated represents the prerequisite imports of project modules.
      await (async () => {
        const requests = [() => _context.import("file:///Users/stevejobs/Documents/GitHub/super-scrollview/assets/core/super-layout.ts"), () => _context.import("file:///Users/stevejobs/Documents/GitHub/super-scrollview/assets/core/super-scrollview.ts"), () => _context.import("file:///Users/stevejobs/Documents/GitHub/super-scrollview/assets/scripts/auto-center.ts"), () => _context.import("file:///Users/stevejobs/Documents/GitHub/super-scrollview/assets/scripts/baseItem.ts"), () => _context.import("file:///Users/stevejobs/Documents/GitHub/super-scrollview/assets/scripts/baseMain.ts"), () => _context.import("file:///Users/stevejobs/Documents/GitHub/super-scrollview/assets/scripts/horizontal.ts"), () => _context.import("file:///Users/stevejobs/Documents/GitHub/super-scrollview/assets/scripts/main.ts"), () => _context.import("file:///Users/stevejobs/Documents/GitHub/super-scrollview/assets/scripts/refresh-load.ts"), () => _context.import("file:///Users/stevejobs/Documents/GitHub/super-scrollview/assets/scripts/simple.ts"), () => _context.import("file:///Users/stevejobs/Documents/GitHub/super-scrollview/assets/scripts/vertical.ts")];

        for (const request of requests) {
          try {
            await request();
          } catch (_err) {// The error should have been caught by executor.
          }
        }
      })();
    }
  };
});
//# sourceMappingURL=prerequisite-imports.js.map