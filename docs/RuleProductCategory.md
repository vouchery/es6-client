# VoucheryApi.RuleProductCategory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | 
**categoryType** | **String** |  | 
**category** | **String** | Name of category, rule will be related to. | [optional] 
**matchingType** | **String** | any_of means that product should have tags in mentioned category. none_of - product shouldn&#39;t have tags. | 
**tags** | **[String]** |  | 



## Enum: TypeEnum


* `ProductCategory` (value: `"ProductCategory"`)





## Enum: CategoryTypeEnum


* `product` (value: `"product"`)





## Enum: MatchingTypeEnum


* `any_of` (value: `"any_of"`)

* `none_of` (value: `"none_of"`)




