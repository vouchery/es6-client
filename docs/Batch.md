# VoucheryApi.Batch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **Number** | How many unique vouchers to generate? Can be an number between 1 and 50 000. | 
**codeType** | **String** | What characters should the code include. Possible choices are digits, letters, and mixed. | 
**randomPartLength** | **Number** | How long should the random part of the code be? Valid values are between 2 and 10, depending on batch size. | 
**prefix** | **String** | A prefix is required for batch generated vouchers. Needs to be unique within project. | 



## Enum: CodeTypeEnum


* `digits` (value: `"digits"`)

* `letters` (value: `"letters"`)

* `mixed` (value: `"mixed"`)




