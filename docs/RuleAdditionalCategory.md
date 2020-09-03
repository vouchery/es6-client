# VoucheryApi.RuleAdditionalCategory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | 
**categoryType** | **String** |  | 
**category** | **String** | Name of category, rule will be related to. | [optional] 
**matchingType** | **String** | any_of means that all products should have tags in mentioned category. none_of - products shouldn&#39;t have tags. | 
**tags** | **[String]** |  | 



## Enum: TypeEnum


* `AdditionalCategory` (value: `"AdditionalCategory"`)





## Enum: CategoryTypeEnum


* `additional` (value: `"additional"`)





## Enum: MatchingTypeEnum


* `any_of` (value: `"any_of"`)

* `none_of` (value: `"none_of"`)




