# VoucheryApi.RuleCustomerPoints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Customer loyalty points should fit specific conditions. | 
**operator** | **String** | What kind of check should system do, comparing loyalty points and rule value property. | 
**value** | **Number** | Value to compare loyalty points with. | 



## Enum: TypeEnum


* `CustomerPoints` (value: `"CustomerPoints"`)





## Enum: OperatorEnum


* `equals` (value: `"equals"`)

* `is_more` (value: `"is_more"`)

* `is_more_or_equal` (value: `"is_more_or_equal"`)

* `is_less` (value: `"is_less"`)

* `is_less_or_equal` (value: `"is_less_or_equal"`)

* `between` (value: `"between"`)

* `division_remainder_equals_zero` (value: `"division_remainder_equals_zero"`)




