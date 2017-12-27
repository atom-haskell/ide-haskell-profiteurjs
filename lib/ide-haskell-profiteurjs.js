"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ide_haskell_profiteurjs_view_1 = require("./ide-haskell-profiteurjs-view");
const atom_1 = require("atom");
let subscriptions;
exports.config = {
    profiteurPath: {
        type: 'string',
        default: 'profiteur.js',
        description: `Path to profiteur executable; if set to 'profiteur.js'
(default) will use bundled ghcjs-powered implementation`,
    },
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlLWhhc2tlbGwtcHJvZml0ZXVyanMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaWRlLWhhc2tlbGwtcHJvZml0ZXVyanMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpRkFBMEU7QUFDMUUsK0JBQTBDO0FBRTFDLElBQUksYUFBOEMsQ0FBQTtBQUNyQyxRQUFBLE1BQU0sR0FBRztJQUNwQixhQUFhLEVBQUU7UUFDYixJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFdBQVcsRUFBRTt3REFDdUM7S0FDckQ7Q0FDRixDQUFBO0FBRUQsa0JBQXlCLE1BQWE7SUFDcEMsYUFBYSxHQUFHLElBQUksMEJBQW1CLEVBQUUsQ0FBQTtJQUN6QyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUN4QyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ04sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLElBQUksd0RBQXlCLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDM0MsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLFNBQVMsQ0FBQTtRQUNsQixDQUFDO0lBQ0gsQ0FBQyxDQUNGLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFYRCw0QkFXQztBQUVEO0lBQ0UsYUFBYSxJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtBQUMxQyxDQUFDO0FBRkQsZ0NBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZGVIYXNrZWxsUHJvZml0ZXVyanNWaWV3IH0gZnJvbSAnLi9pZGUtaGFza2VsbC1wcm9maXRldXJqcy12aWV3J1xuaW1wb3J0IHsgQ29tcG9zaXRlRGlzcG9zYWJsZSB9IGZyb20gJ2F0b20nXG5cbmxldCBzdWJzY3JpcHRpb25zOiBDb21wb3NpdGVEaXNwb3NhYmxlIHwgdW5kZWZpbmVkXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBwcm9maXRldXJQYXRoOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ3Byb2ZpdGV1ci5qcycsXG4gICAgZGVzY3JpcHRpb246IGBQYXRoIHRvIHByb2ZpdGV1ciBleGVjdXRhYmxlOyBpZiBzZXQgdG8gJ3Byb2ZpdGV1ci5qcydcbihkZWZhdWx0KSB3aWxsIHVzZSBidW5kbGVkIGdoY2pzLXBvd2VyZWQgaW1wbGVtZW50YXRpb25gLFxuICB9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGUoX3N0YXRlOiBuZXZlcikge1xuICBzdWJzY3JpcHRpb25zID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKVxuICBzdWJzY3JpcHRpb25zLmFkZChhdG9tLndvcmtzcGFjZS5hZGRPcGVuZXIoXG4gICAgKHVyaSkgPT4ge1xuICAgICAgaWYgKHVyaS5lbmRzV2l0aCgnLnByb2YnKSkge1xuICAgICAgICByZXR1cm4gbmV3IElkZUhhc2tlbGxQcm9maXRldXJqc1ZpZXcodXJpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH0sXG4gICkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWFjdGl2YXRlKCkge1xuICBzdWJzY3JpcHRpb25zICYmIHN1YnNjcmlwdGlvbnMuZGlzcG9zZSgpXG59XG4iXX0=