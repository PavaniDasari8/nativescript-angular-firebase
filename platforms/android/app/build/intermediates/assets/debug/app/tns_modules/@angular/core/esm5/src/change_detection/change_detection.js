/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DefaultIterableDifferFactory } from './differs/default_iterable_differ';
import { DefaultKeyValueDifferFactory } from './differs/default_keyvalue_differ';
import { IterableDiffers } from './differs/iterable_differs';
import { KeyValueDiffers } from './differs/keyvalue_differs';
export { SimpleChange, WrappedValue, devModeEqual } from './change_detection_util';
export { ChangeDetectorRef } from './change_detector_ref';
export { ChangeDetectionStrategy, ChangeDetectorStatus, isDefaultChangeDetectionStrategy } from './constants';
export { DefaultIterableDifferFactory } from './differs/default_iterable_differ';
export { DefaultIterableDiffer } from './differs/default_iterable_differ';
export { DefaultKeyValueDifferFactory } from './differs/default_keyvalue_differ';
export { IterableDiffers } from './differs/iterable_differs';
export { KeyValueDiffers } from './differs/keyvalue_differs';
/**
 * Structural diffing for `Object`s and `Map`s.
 */
var keyValDiff = [new DefaultKeyValueDifferFactory()];
/**
 * Structural diffing for `Iterable` types such as `Array`s.
 */
var iterableDiff = [new DefaultIterableDifferFactory()];
export var defaultIterableDiffers = new IterableDiffers(iterableDiff);
export var defaultKeyValueDiffers = new KeyValueDiffers(keyValDiff);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX2RldGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRSxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRSxPQUFPLEVBQXdCLGVBQWUsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xGLE9BQU8sRUFBd0IsZUFBZSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFHbEYsT0FBTyxFQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDakYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFDLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLGdDQUFnQyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQzVHLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQy9FLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQy9FLE9BQU8sRUFBdUcsZUFBZSxFQUE4QixNQUFNLDRCQUE0QixDQUFDO0FBQzlMLE9BQU8sRUFBK0UsZUFBZSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFLekk7O0dBRUc7QUFDSCxJQUFNLFVBQVUsR0FBNEIsQ0FBQyxJQUFJLDRCQUE0QixFQUFFLENBQUMsQ0FBQztBQUVqRjs7R0FFRztBQUNILElBQU0sWUFBWSxHQUE0QixDQUFDLElBQUksNEJBQTRCLEVBQUUsQ0FBQyxDQUFDO0FBRW5GLE1BQU0sQ0FBQyxJQUFNLHNCQUFzQixHQUFHLElBQUksZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXhFLE1BQU0sQ0FBQyxJQUFNLHNCQUFzQixHQUFHLElBQUksZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RlZmF1bHRJdGVyYWJsZURpZmZlckZhY3Rvcnl9IGZyb20gJy4vZGlmZmVycy9kZWZhdWx0X2l0ZXJhYmxlX2RpZmZlcic7XG5pbXBvcnQge0RlZmF1bHRLZXlWYWx1ZURpZmZlckZhY3Rvcnl9IGZyb20gJy4vZGlmZmVycy9kZWZhdWx0X2tleXZhbHVlX2RpZmZlcic7XG5pbXBvcnQge0l0ZXJhYmxlRGlmZmVyRmFjdG9yeSwgSXRlcmFibGVEaWZmZXJzfSBmcm9tICcuL2RpZmZlcnMvaXRlcmFibGVfZGlmZmVycyc7XG5pbXBvcnQge0tleVZhbHVlRGlmZmVyRmFjdG9yeSwgS2V5VmFsdWVEaWZmZXJzfSBmcm9tICcuL2RpZmZlcnMva2V5dmFsdWVfZGlmZmVycyc7XG5cbmV4cG9ydCB7U2ltcGxlQ2hhbmdlc30gZnJvbSAnLi4vbWV0YWRhdGEvbGlmZWN5Y2xlX2hvb2tzJztcbmV4cG9ydCB7U2ltcGxlQ2hhbmdlLCBXcmFwcGVkVmFsdWUsIGRldk1vZGVFcXVhbH0gZnJvbSAnLi9jaGFuZ2VfZGV0ZWN0aW9uX3V0aWwnO1xuZXhwb3J0IHtDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnLi9jaGFuZ2VfZGV0ZWN0b3JfcmVmJztcbmV4cG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yU3RhdHVzLCBpc0RlZmF1bHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0IHtEZWZhdWx0SXRlcmFibGVEaWZmZXJGYWN0b3J5fSBmcm9tICcuL2RpZmZlcnMvZGVmYXVsdF9pdGVyYWJsZV9kaWZmZXInO1xuZXhwb3J0IHtEZWZhdWx0SXRlcmFibGVEaWZmZXJ9IGZyb20gJy4vZGlmZmVycy9kZWZhdWx0X2l0ZXJhYmxlX2RpZmZlcic7XG5leHBvcnQge0RlZmF1bHRLZXlWYWx1ZURpZmZlckZhY3Rvcnl9IGZyb20gJy4vZGlmZmVycy9kZWZhdWx0X2tleXZhbHVlX2RpZmZlcic7XG5leHBvcnQge0NvbGxlY3Rpb25DaGFuZ2VSZWNvcmQsIEl0ZXJhYmxlQ2hhbmdlUmVjb3JkLCBJdGVyYWJsZUNoYW5nZXMsIEl0ZXJhYmxlRGlmZmVyLCBJdGVyYWJsZURpZmZlckZhY3RvcnksIEl0ZXJhYmxlRGlmZmVycywgTmdJdGVyYWJsZSwgVHJhY2tCeUZ1bmN0aW9ufSBmcm9tICcuL2RpZmZlcnMvaXRlcmFibGVfZGlmZmVycyc7XG5leHBvcnQge0tleVZhbHVlQ2hhbmdlUmVjb3JkLCBLZXlWYWx1ZUNoYW5nZXMsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlckZhY3RvcnksIEtleVZhbHVlRGlmZmVyc30gZnJvbSAnLi9kaWZmZXJzL2tleXZhbHVlX2RpZmZlcnMnO1xuZXhwb3J0IHtQaXBlVHJhbnNmb3JtfSBmcm9tICcuL3BpcGVfdHJhbnNmb3JtJztcblxuXG5cbi8qKlxuICogU3RydWN0dXJhbCBkaWZmaW5nIGZvciBgT2JqZWN0YHMgYW5kIGBNYXBgcy5cbiAqL1xuY29uc3Qga2V5VmFsRGlmZjogS2V5VmFsdWVEaWZmZXJGYWN0b3J5W10gPSBbbmV3IERlZmF1bHRLZXlWYWx1ZURpZmZlckZhY3RvcnkoKV07XG5cbi8qKlxuICogU3RydWN0dXJhbCBkaWZmaW5nIGZvciBgSXRlcmFibGVgIHR5cGVzIHN1Y2ggYXMgYEFycmF5YHMuXG4gKi9cbmNvbnN0IGl0ZXJhYmxlRGlmZjogSXRlcmFibGVEaWZmZXJGYWN0b3J5W10gPSBbbmV3IERlZmF1bHRJdGVyYWJsZURpZmZlckZhY3RvcnkoKV07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0SXRlcmFibGVEaWZmZXJzID0gbmV3IEl0ZXJhYmxlRGlmZmVycyhpdGVyYWJsZURpZmYpO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEtleVZhbHVlRGlmZmVycyA9IG5ldyBLZXlWYWx1ZURpZmZlcnMoa2V5VmFsRGlmZik7XG4iXX0=