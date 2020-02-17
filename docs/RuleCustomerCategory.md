# VoucheryApi.RuleCustomerCategory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | 
**category** | **String** | Name of category, rule will be related to. | [optional] 
**matchingType** | **String** | any_of means that customer should have tags in mentioned category. none_of - customer shouldn&#39;t have tags. | 
**tags** | **[String]** |  | 



## Enum: TypeEnum


* `CustomerCategory` (value: `"CustomerCategory"`)





## Enum: MatchingTypeEnum


* `any_of` (value: `"any_of"`)

* `none_of` (value: `"none_of"`)




