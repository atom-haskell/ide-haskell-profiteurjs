"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ide_haskell_profiteurjs_view_1 = require("./ide-haskell-profiteurjs-view");
const atom_1 = require("atom");
let subscriptions;
var config_1 = require("./config");
exports.config = config_1.config;
function activate(_state) {
    subscriptions = new atom_1.CompositeDisposable();
    subscriptions.add(atom.workspace.addOpener((uri) => {
        if (uri.endsWith('.prof')) {
            return new ide_haskell_profiteurjs_view_1.IdeHaskellProfiteurjsView(uri);
        }
        else {
            return undefined;
        }
    }));
}
exports.activate = activate;
function deactivate() {
    subscriptions && subscriptions.dispose();
}
exports.deactivate = deactivate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlLWhhc2tlbGwtcHJvZml0ZXVyanMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaWRlLWhhc2tlbGwtcHJvZml0ZXVyanMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpRkFBMEU7QUFDMUUsK0JBQTBDO0FBRTFDLElBQUksYUFBOEMsQ0FBQTtBQUNsRCxtQ0FBaUM7QUFBeEIsMEJBQUEsTUFBTSxDQUFBO0FBRWYsa0JBQXlCLE1BQWE7SUFDcEMsYUFBYSxHQUFHLElBQUksMEJBQW1CLEVBQUUsQ0FBQTtJQUN6QyxhQUFhLENBQUMsR0FBRyxDQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDL0IsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sSUFBSSx3REFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUMxQzthQUFNO1lBQ0wsT0FBTyxTQUFTLENBQUE7U0FDakI7SUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFBO0FBQ0gsQ0FBQztBQVhELDRCQVdDO0FBRUQ7SUFDRSxhQUFhLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFBO0FBQzFDLENBQUM7QUFGRCxnQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElkZUhhc2tlbGxQcm9maXRldXJqc1ZpZXcgfSBmcm9tICcuL2lkZS1oYXNrZWxsLXByb2ZpdGV1cmpzLXZpZXcnXG5pbXBvcnQgeyBDb21wb3NpdGVEaXNwb3NhYmxlIH0gZnJvbSAnYXRvbSdcblxubGV0IHN1YnNjcmlwdGlvbnM6IENvbXBvc2l0ZURpc3Bvc2FibGUgfCB1bmRlZmluZWRcbmV4cG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGUoX3N0YXRlOiBuZXZlcikge1xuICBzdWJzY3JpcHRpb25zID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKVxuICBzdWJzY3JpcHRpb25zLmFkZChcbiAgICBhdG9tLndvcmtzcGFjZS5hZGRPcGVuZXIoKHVyaSkgPT4ge1xuICAgICAgaWYgKHVyaS5lbmRzV2l0aCgnLnByb2YnKSkge1xuICAgICAgICByZXR1cm4gbmV3IElkZUhhc2tlbGxQcm9maXRldXJqc1ZpZXcodXJpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH0pLFxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWFjdGl2YXRlKCkge1xuICBzdWJzY3JpcHRpb25zICYmIHN1YnNjcmlwdGlvbnMuZGlzcG9zZSgpXG59XG4iXX0=