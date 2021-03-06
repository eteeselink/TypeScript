//// [tests/cases/compiler/privacyCheckExternalModuleExportAssignmentOfGenericClass.ts] ////

//// [privacyCheckExternalModuleExportAssignmentOfGenericClass_0.ts]
export = Foo;
class Foo<A> {
    constructor(public a: A) { }
}

//// [privacyCheckExternalModuleExportAssignmentOfGenericClass_1.ts]
import Foo = require("privacyCheckExternalModuleExportAssignmentOfGenericClass_0");
export = Bar;
interface Bar {
    foo: Foo<number>;
}

//// [privacyCheckExternalModuleExportAssignmentOfGenericClass_0.js]
var Foo = (function () {
    function Foo(a) {
        this.a = a;
    }
    return Foo;
})();
module.exports = Foo;
//// [privacyCheckExternalModuleExportAssignmentOfGenericClass_1.js]
