/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { ReflectionCapabilities } from '../reflection/reflection_capabilities';
import { makeDecorator } from '../util/decorators';
import { getClosureSafeProperty } from '../util/property';
import { defineInjectable } from './defs';
import { inject, injectArgs } from './injector';
var GET_PROPERTY_NAME = {};
var ɵ0 = GET_PROPERTY_NAME;
var USE_VALUE = getClosureSafeProperty({ provide: String, useValue: ɵ0 }, GET_PROPERTY_NAME);
var EMPTY_ARRAY = [];
export function convertInjectableProviderToFactory(type, provider) {
    if (!provider) {
        var reflectionCapabilities = new ReflectionCapabilities();
        var deps_1 = reflectionCapabilities.parameters(type);
        // TODO - convert to flags.
        return function () { return new (type.bind.apply(type, tslib_1.__spread([void 0], injectArgs(deps_1))))(); };
    }
    if (USE_VALUE in provider) {
        var valueProvider_1 = provider;
        return function () { return valueProvider_1.useValue; };
    }
    else if (provider.useExisting) {
        var existingProvider_1 = provider;
        return function () { return inject(existingProvider_1.useExisting); };
    }
    else if (provider.useFactory) {
        var factoryProvider_1 = provider;
        return function () { return factoryProvider_1.useFactory.apply(factoryProvider_1, tslib_1.__spread(injectArgs(factoryProvider_1.deps || EMPTY_ARRAY))); };
    }
    else if (provider.useClass) {
        var classProvider_1 = provider;
        var deps_2 = provider.deps;
        if (!deps_2) {
            var reflectionCapabilities = new ReflectionCapabilities();
            deps_2 = reflectionCapabilities.parameters(type);
        }
        return function () {
            return new ((_a = classProvider_1.useClass).bind.apply(_a, tslib_1.__spread([void 0], injectArgs(deps_2))))();
            var _a;
        };
    }
    else {
        var deps_3 = provider.deps;
        if (!deps_3) {
            var reflectionCapabilities = new ReflectionCapabilities();
            deps_3 = reflectionCapabilities.parameters(type);
        }
        return function () { return new (type.bind.apply(type, tslib_1.__spread([void 0], injectArgs(deps_3))))(); };
    }
}
/**
* Injectable decorator and metadata.
*
* @Annotation
*/
export var Injectable = makeDecorator('Injectable', undefined, undefined, undefined, function (injectableType, options) {
    if (options && options.providedIn !== undefined &&
        injectableType.ngInjectableDef === undefined) {
        injectableType.ngInjectableDef = defineInjectable({
            providedIn: options.providedIn,
            factory: convertInjectableProviderToFactory(injectableType, options)
        });
    }
});
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2RpL2luamVjdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBRTdFLE9BQU8sRUFBQyxhQUFhLEVBQXFCLE1BQU0sb0JBQW9CLENBQUM7QUFDckUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFeEQsT0FBTyxFQUFnQyxnQkFBZ0IsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUN2RSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUc5QyxJQUFNLGlCQUFpQixHQUFHLEVBQVMsQ0FBQztTQUVKLGlCQUFpQjtBQURqRCxJQUFNLFNBQVMsR0FBRyxzQkFBc0IsQ0FDcEMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsSUFBbUIsRUFBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUE4Q3ZFLElBQU0sV0FBVyxHQUFVLEVBQUUsQ0FBQztBQUU5QixNQUFNLDZDQUNGLElBQWUsRUFBRSxRQUE2QjtJQUNoRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDZCxJQUFNLHNCQUFzQixHQUFHLElBQUksc0JBQXNCLEVBQUUsQ0FBQztRQUM1RCxJQUFNLE1BQUksR0FBRyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsMkJBQTJCO1FBQzNCLE1BQU0sQ0FBQyxjQUFNLFlBQUksSUFBSSxZQUFKLElBQUksNkJBQUksVUFBVSxDQUFDLE1BQWEsQ0FBQyxPQUFyQyxDQUFzQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFNLGVBQWEsR0FBSSxRQUE4QixDQUFDO1FBQ3RELE1BQU0sQ0FBQyxjQUFNLE9BQUEsZUFBYSxDQUFDLFFBQVEsRUFBdEIsQ0FBc0IsQ0FBQztJQUN0QyxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFFLFFBQWlDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFNLGtCQUFnQixHQUFJLFFBQWlDLENBQUM7UUFDNUQsTUFBTSxDQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsa0JBQWdCLENBQUMsV0FBVyxDQUFDLEVBQXBDLENBQW9DLENBQUM7SUFDcEQsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBRSxRQUFnQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBTSxpQkFBZSxHQUFJLFFBQWdDLENBQUM7UUFDMUQsTUFBTSxDQUFDLGNBQU0sT0FBQSxpQkFBZSxDQUFDLFVBQVUsT0FBMUIsaUJBQWUsbUJBQWUsVUFBVSxDQUFDLGlCQUFlLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQyxJQUE3RSxDQUE4RSxDQUFDO0lBQzlGLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUUsUUFBd0QsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQU0sZUFBYSxHQUFJLFFBQXdELENBQUM7UUFDaEYsSUFBSSxNQUFJLEdBQUksUUFBb0MsQ0FBQyxJQUFJLENBQUM7UUFDdEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1YsSUFBTSxzQkFBc0IsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7WUFDNUQsTUFBSSxHQUFHLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQ0QsTUFBTSxDQUFDO1lBQU0sWUFBSSxDQUFBLEtBQUEsZUFBYSxDQUFDLFFBQVEsQ0FBQSwyQ0FBSSxVQUFVLENBQUMsTUFBSSxDQUFDOztRQUE5QyxDQUErQyxDQUFDO0lBQy9ELENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksTUFBSSxHQUFJLFFBQW9DLENBQUMsSUFBSSxDQUFDO1FBQ3RELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBSSxDQUFDLENBQUMsQ0FBQztZQUNWLElBQU0sc0JBQXNCLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1lBQzVELE1BQUksR0FBRyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUNELE1BQU0sQ0FBQyxjQUFNLFlBQUksSUFBSSxZQUFKLElBQUksNkJBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUE5QixDQUErQixDQUFDO0lBQy9DLENBQUM7QUFDSCxDQUFDO0FBRUQ7Ozs7RUFJRTtBQUNGLE1BQU0sQ0FBQyxJQUFNLFVBQVUsR0FBd0IsYUFBYSxDQUN4RCxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQzdDLFVBQUMsY0FBbUMsRUFDbkMsT0FBcUU7SUFDcEUsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssU0FBUztRQUMzQyxjQUFjLENBQUMsZUFBZSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDakQsY0FBYyxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQztZQUNoRCxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVU7WUFDOUIsT0FBTyxFQUFFLGtDQUFrQyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUM7U0FDckUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztBQUNILENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1JlZmxlY3Rpb25DYXBhYmlsaXRpZXN9IGZyb20gJy4uL3JlZmxlY3Rpb24vcmVmbGVjdGlvbl9jYXBhYmlsaXRpZXMnO1xuaW1wb3J0IHtUeXBlfSBmcm9tICcuLi90eXBlJztcbmltcG9ydCB7bWFrZURlY29yYXRvciwgbWFrZVBhcmFtRGVjb3JhdG9yfSBmcm9tICcuLi91dGlsL2RlY29yYXRvcnMnO1xuaW1wb3J0IHtnZXRDbG9zdXJlU2FmZVByb3BlcnR5fSBmcm9tICcuLi91dGlsL3Byb3BlcnR5JztcblxuaW1wb3J0IHtJbmplY3RhYmxlRGVmLCBJbmplY3RhYmxlVHlwZSwgZGVmaW5lSW5qZWN0YWJsZX0gZnJvbSAnLi9kZWZzJztcbmltcG9ydCB7aW5qZWN0LCBpbmplY3RBcmdzfSBmcm9tICcuL2luamVjdG9yJztcbmltcG9ydCB7Q2xhc3NTYW5zUHJvdmlkZXIsIENvbnN0cnVjdG9yUHJvdmlkZXIsIENvbnN0cnVjdG9yU2Fuc1Byb3ZpZGVyLCBFeGlzdGluZ1Byb3ZpZGVyLCBFeGlzdGluZ1NhbnNQcm92aWRlciwgRmFjdG9yeVByb3ZpZGVyLCBGYWN0b3J5U2Fuc1Byb3ZpZGVyLCBTdGF0aWNDbGFzc1Byb3ZpZGVyLCBTdGF0aWNDbGFzc1NhbnNQcm92aWRlciwgVmFsdWVQcm92aWRlciwgVmFsdWVTYW5zUHJvdmlkZXJ9IGZyb20gJy4vcHJvdmlkZXInO1xuXG5jb25zdCBHRVRfUFJPUEVSVFlfTkFNRSA9IHt9IGFzIGFueTtcbmNvbnN0IFVTRV9WQUxVRSA9IGdldENsb3N1cmVTYWZlUHJvcGVydHk8VmFsdWVQcm92aWRlcj4oXG4gICAge3Byb3ZpZGU6IFN0cmluZywgdXNlVmFsdWU6IEdFVF9QUk9QRVJUWV9OQU1FfSwgR0VUX1BST1BFUlRZX05BTUUpO1xuXG4vKipcbiAqIEluamVjdGFibGUgcHJvdmlkZXJzIHVzZWQgaW4gYEBJbmplY3RhYmxlYCBkZWNvcmF0b3IuXG4gKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgdHlwZSBJbmplY3RhYmxlUHJvdmlkZXIgPSBWYWx1ZVNhbnNQcm92aWRlciB8IEV4aXN0aW5nU2Fuc1Byb3ZpZGVyIHxcbiAgICBTdGF0aWNDbGFzc1NhbnNQcm92aWRlciB8IENvbnN0cnVjdG9yU2Fuc1Byb3ZpZGVyIHwgRmFjdG9yeVNhbnNQcm92aWRlciB8IENsYXNzU2Fuc1Byb3ZpZGVyO1xuXG4vKipcbiAqIFR5cGUgb2YgdGhlIEluamVjdGFibGUgZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5qZWN0YWJsZURlY29yYXRvciB7XG4gIC8qKlxuICAgKiBBIG1hcmtlciBtZXRhZGF0YSB0aGF0IG1hcmtzIGEgY2xhc3MgYXMgYXZhaWxhYmxlIHRvIGBJbmplY3RvcmAgZm9yIGNyZWF0aW9uLlxuICAgKlxuICAgKiBGb3IgbW9yZSBkZXRhaWxzLCBzZWUgdGhlIFtcIkRlcGVuZGVuY3kgSW5qZWN0aW9uIEd1aWRlXCJdKGd1aWRlL2RlcGVuZGVuY3ktaW5qZWN0aW9uKS5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvbWV0YWRhdGFfc3BlYy50cyByZWdpb249J0luamVjdGFibGUnfVxuICAgKlxuICAgKiBgSW5qZWN0b3JgIHdpbGwgdGhyb3cgYW4gZXJyb3Igd2hlbiB0cnlpbmcgdG8gaW5zdGFudGlhdGUgYSBjbGFzcyB0aGF0XG4gICAqIGRvZXMgbm90IGhhdmUgYEBJbmplY3RhYmxlYCBtYXJrZXIsIGFzIHNob3duIGluIHRoZSBleGFtcGxlIGJlbG93LlxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy9tZXRhZGF0YV9zcGVjLnRzIHJlZ2lvbj0nSW5qZWN0YWJsZVRocm93cyd9XG4gICAqXG4gICAqL1xuICAoKTogYW55O1xuICAob3B0aW9ucz86IHtwcm92aWRlZEluOiBUeXBlPGFueT58ICdyb290JyB8IG51bGx9JkluamVjdGFibGVQcm92aWRlcik6IGFueTtcbiAgbmV3ICgpOiBJbmplY3RhYmxlO1xuICBuZXcgKG9wdGlvbnM/OiB7cHJvdmlkZWRJbjogVHlwZTxhbnk+fCAncm9vdCcgfCBudWxsfSZJbmplY3RhYmxlUHJvdmlkZXIpOiBJbmplY3RhYmxlO1xufVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIEluamVjdGFibGUgbWV0YWRhdGEuXG4gKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluamVjdGFibGUge1xuICBwcm92aWRlZEluPzogVHlwZTxhbnk+fCdyb290J3xudWxsO1xuICBmYWN0b3J5OiAoKSA9PiBhbnk7XG59XG5cbmNvbnN0IEVNUFRZX0FSUkFZOiBhbnlbXSA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEluamVjdGFibGVQcm92aWRlclRvRmFjdG9yeShcbiAgICB0eXBlOiBUeXBlPGFueT4sIHByb3ZpZGVyPzogSW5qZWN0YWJsZVByb3ZpZGVyKTogKCkgPT4gYW55IHtcbiAgaWYgKCFwcm92aWRlcikge1xuICAgIGNvbnN0IHJlZmxlY3Rpb25DYXBhYmlsaXRpZXMgPSBuZXcgUmVmbGVjdGlvbkNhcGFiaWxpdGllcygpO1xuICAgIGNvbnN0IGRlcHMgPSByZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLnBhcmFtZXRlcnModHlwZSk7XG4gICAgLy8gVE9ETyAtIGNvbnZlcnQgdG8gZmxhZ3MuXG4gICAgcmV0dXJuICgpID0+IG5ldyB0eXBlKC4uLmluamVjdEFyZ3MoZGVwcyBhcyBhbnlbXSkpO1xuICB9XG5cbiAgaWYgKFVTRV9WQUxVRSBpbiBwcm92aWRlcikge1xuICAgIGNvbnN0IHZhbHVlUHJvdmlkZXIgPSAocHJvdmlkZXIgYXMgVmFsdWVTYW5zUHJvdmlkZXIpO1xuICAgIHJldHVybiAoKSA9PiB2YWx1ZVByb3ZpZGVyLnVzZVZhbHVlO1xuICB9IGVsc2UgaWYgKChwcm92aWRlciBhcyBFeGlzdGluZ1NhbnNQcm92aWRlcikudXNlRXhpc3RpbmcpIHtcbiAgICBjb25zdCBleGlzdGluZ1Byb3ZpZGVyID0gKHByb3ZpZGVyIGFzIEV4aXN0aW5nU2Fuc1Byb3ZpZGVyKTtcbiAgICByZXR1cm4gKCkgPT4gaW5qZWN0KGV4aXN0aW5nUHJvdmlkZXIudXNlRXhpc3RpbmcpO1xuICB9IGVsc2UgaWYgKChwcm92aWRlciBhcyBGYWN0b3J5U2Fuc1Byb3ZpZGVyKS51c2VGYWN0b3J5KSB7XG4gICAgY29uc3QgZmFjdG9yeVByb3ZpZGVyID0gKHByb3ZpZGVyIGFzIEZhY3RvcnlTYW5zUHJvdmlkZXIpO1xuICAgIHJldHVybiAoKSA9PiBmYWN0b3J5UHJvdmlkZXIudXNlRmFjdG9yeSguLi5pbmplY3RBcmdzKGZhY3RvcnlQcm92aWRlci5kZXBzIHx8IEVNUFRZX0FSUkFZKSk7XG4gIH0gZWxzZSBpZiAoKHByb3ZpZGVyIGFzIFN0YXRpY0NsYXNzU2Fuc1Byb3ZpZGVyIHwgQ2xhc3NTYW5zUHJvdmlkZXIpLnVzZUNsYXNzKSB7XG4gICAgY29uc3QgY2xhc3NQcm92aWRlciA9IChwcm92aWRlciBhcyBTdGF0aWNDbGFzc1NhbnNQcm92aWRlciB8IENsYXNzU2Fuc1Byb3ZpZGVyKTtcbiAgICBsZXQgZGVwcyA9IChwcm92aWRlciBhcyBTdGF0aWNDbGFzc1NhbnNQcm92aWRlcikuZGVwcztcbiAgICBpZiAoIWRlcHMpIHtcbiAgICAgIGNvbnN0IHJlZmxlY3Rpb25DYXBhYmlsaXRpZXMgPSBuZXcgUmVmbGVjdGlvbkNhcGFiaWxpdGllcygpO1xuICAgICAgZGVwcyA9IHJlZmxlY3Rpb25DYXBhYmlsaXRpZXMucGFyYW1ldGVycyh0eXBlKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IG5ldyBjbGFzc1Byb3ZpZGVyLnVzZUNsYXNzKC4uLmluamVjdEFyZ3MoZGVwcykpO1xuICB9IGVsc2Uge1xuICAgIGxldCBkZXBzID0gKHByb3ZpZGVyIGFzIENvbnN0cnVjdG9yU2Fuc1Byb3ZpZGVyKS5kZXBzO1xuICAgIGlmICghZGVwcykge1xuICAgICAgY29uc3QgcmVmbGVjdGlvbkNhcGFiaWxpdGllcyA9IG5ldyBSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzKCk7XG4gICAgICBkZXBzID0gcmVmbGVjdGlvbkNhcGFiaWxpdGllcy5wYXJhbWV0ZXJzKHR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gbmV3IHR5cGUoLi4uaW5qZWN0QXJncyhkZXBzICEpKTtcbiAgfVxufVxuXG4vKipcbiogSW5qZWN0YWJsZSBkZWNvcmF0b3IgYW5kIG1ldGFkYXRhLlxuKlxuKiBAQW5ub3RhdGlvblxuKi9cbmV4cG9ydCBjb25zdCBJbmplY3RhYmxlOiBJbmplY3RhYmxlRGVjb3JhdG9yID0gbWFrZURlY29yYXRvcihcbiAgICAnSW5qZWN0YWJsZScsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsXG4gICAgKGluamVjdGFibGVUeXBlOiBJbmplY3RhYmxlVHlwZTxhbnk+LFxuICAgICBvcHRpb25zOiB7cHJvdmlkZWRJbj86IFR5cGU8YW55PnwgJ3Jvb3QnIHwgbnVsbH0gJiBJbmplY3RhYmxlUHJvdmlkZXIpID0+IHtcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucHJvdmlkZWRJbiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgaW5qZWN0YWJsZVR5cGUubmdJbmplY3RhYmxlRGVmID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaW5qZWN0YWJsZVR5cGUubmdJbmplY3RhYmxlRGVmID0gZGVmaW5lSW5qZWN0YWJsZSh7XG4gICAgICAgICAgcHJvdmlkZWRJbjogb3B0aW9ucy5wcm92aWRlZEluLFxuICAgICAgICAgIGZhY3Rvcnk6IGNvbnZlcnRJbmplY3RhYmxlUHJvdmlkZXJUb0ZhY3RvcnkoaW5qZWN0YWJsZVR5cGUsIG9wdGlvbnMpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4vKipcbiAqIFR5cGUgcmVwcmVzZW50aW5nIGluamVjdGFibGUgc2VydmljZS5cbiAqXG4gKiBAZXhwZXJpbWVudGFsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5qZWN0YWJsZVR5cGU8VD4gZXh0ZW5kcyBUeXBlPFQ+IHsgbmdJbmplY3RhYmxlRGVmOiBJbmplY3RhYmxlRGVmPFQ+OyB9XG4iXX0=