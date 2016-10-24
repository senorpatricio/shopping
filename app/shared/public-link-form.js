System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PublicLink;
    return {
        setters:[],
        execute: function() {
            PublicLink = (function () {
                function PublicLink(id, shareUrl, shareEmail) {
                    this.id = id;
                    this.shareUrl = shareUrl;
                    this.shareEmail = shareEmail;
                }
                return PublicLink;
            }());
            exports_1("PublicLink", PublicLink);
        }
    }
});
//# sourceMappingURL=public-link-form.js.map