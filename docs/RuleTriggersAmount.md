# VoucheryApi.RuleTriggersAmount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | 
**operator** | **String** | What kind of check should system do, comparing number of triggers and rule value property. | 
**value** | **Number** | Value to compare loyalty points with. | 
**groupBy** | **String** | How exactly should total amount of triggers be calculated. For each customer, subcampaign or other. | 



## Enum: TypeEnum


* `TriggersAmount` (value: `"TriggersAmount"`)





## Enum: OperatorEnum


* `equals` (value: `"equals"`)

* `is_more` (value: `"is_more"`)

* `is_more_or_equal` (value: `"is_more_or_equal"`)

* `is_less` (value: `"is_less"`)

* `is_less_or_equal` (value: `"is_less_or_equal"`)

* `between` (value: `"between"`)

* `division_remainder_equals_zero` (value: `"division_remainder_equals_zero"`)





## Enum: GroupByEnum


* `customer` (value: `"customer"`)




