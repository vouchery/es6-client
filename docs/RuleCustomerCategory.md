# VoucheryApi.RuleCustomerCategory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | What categories should customer belong/not belong to pass the rule. | [default to &#39;customer_category&#39;]
**category** | **String** | Name of category, rule will be related to. | [optional] 
**matchingType** | **String** | any_of means that customer should have tags in mentioned category. none_of - customer shouldn&#39;t have tags. | 
**tags** | **[String]** |  | 



## Enum: TypeEnum


* `customer_category` (value: `"customer_category"`)





## Enum: MatchingTypeEnum


* `any_of` (value: `"any_of"`)

* `none_of` (value: `"none_of"`)




