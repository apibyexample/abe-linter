ABE-Linter
==========

A linter for API By Example (ABE), which checks mock's written using the ABE format to ensure that they match the ABE
schema.

ABE is written using [JSON Schema](http://json-schema.org/) and the ABE specific format can be found as part of [ABE-Spec](http://github.com/apibyexample/abe-spec) in the ``schema.json`` file. In order to test against ABE-Linter uses the JSON Schema validator [JaySchema](https://github.com/natesilva/jayschema).
