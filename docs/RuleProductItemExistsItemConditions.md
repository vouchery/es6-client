# VoucheryApi.RuleProductItemExistsItemConditions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field** | **String** |  | [optional] 
**operator** | **String** | What kind of check should system do, comparing field of item with given value | [optional] 
**value** | **String** | Value to compare. Can be number or string, depending on field to compare | [optional] 



## Enum: FieldEnum


* `name` (value: `"name"`)

* `price` (value: `"price"`)

* `sku` (value: `"sku"`)

* `quantity` (value: `"quantity"`)

* `product_identifier` (value: `"product_identifier"`)

* `weight` (value: `"weight"`)

* `categories` (value: `"categories"`)





## Enum: OperatorEnum


* `equals` (value: `"equals"`)

* `is_more` (value: `"is_more"`)

* `is_more_or_equal` (value: `"is_more_or_equal"`)

* `is_less` (value: `"is_less"`)

* `is_less_or_equal` (value: `"is_less_or_equal"`)

* `between` (value: `"between"`)

* `division_remainder_equals_zero` (value: `"division_remainder_equals_zero"`)

* `include` (value: `"include"`)




