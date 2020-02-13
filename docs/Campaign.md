# VoucheryApi.Campaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | This field is required only when you create a campaign. Main Campaign is a wrapper for multipe Sub Campaings, grouped together. Main Campaign can have own budget and redemptions limit. | 
**id** | **Number** |  | [optional] [readonly] 
**parentId** | **Number** | Required only for subcampaigns. | 
**status** | **String** |  | [optional] 
**name** | **String** | The name of the campaign must be unique. | 
**triggersOn** | **String** | What type of trigger sub campaign is reacting on to check rules and give rewards. | [optional] 
**triggerName** | **String** | If campaign is triggered by custom trigger, it&#39;s name should be specified. | [optional] 
**template** | **String** | Determines campaign business type &amp; structure to setup | [optional] 
**description** | **String** |  | [optional] 
**customerInformation** | **String** | Text that can be displayed to the customer once the redemption is validated or confirmed. | [optional] 
**maxTotalBudget** | **Number** | The budget available for all discount campaigns grouped by this campaign. | [optional] 
**maxRedemptions** | **Number** | The maximum number of redemptions available across all discount campaigns grouped by this campaign. | [optional] 
**minimumValue** | **Number** |  | [optional] 
**maxDiscount** | **Number** |  | [optional] 
**currency** | **String** | Currency denominating monetary values in this campaign (USD, GBP, EUR, AUD) | [optional] [readonly] 
**currencySymbol** | **String** | Currency symbol ($, £, €) | [optional] [readonly] 
**team** | **String** |  | [optional] 
**channel** | **String** |  | [optional] 
**purpose** | **String** |  | [optional] 
**budgetCode** | **String** |  | [optional] 
**medium** | **String** |  | [optional] 
**voucherType** | **String** | Determines what type of vouchers can be generated for campaign. Generic vouchers (eg. SALE10) can be redeemed multiple times. Unique vouchers allow for greater control and better tracking of who and how is using your promotions. | [optional] 
**voucherCodeType** | **String** | What characters should the code include when new voucher is created. Possible choices are digits, letters, and mixed. | [optional] 
**voucherRandomPartLength** | **Number** | How long should the random part of the code be? Valid values are between 2 and 10, depending on batch size. | [optional] 
**voucherPrefix** | **String** | A prefix that will be used to generate vouchers. Needs to be unique within project. | [optional] 
**createdAt** | **Date** |  | [optional] [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 



## Enum: TypeEnum


* `MainCampaign` (value: `"MainCampaign"`)

* `SubCampaign` (value: `"SubCampaign"`)





## Enum: StatusEnum


* `draft` (value: `"draft"`)

* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)

* `archived` (value: `"archived"`)





## Enum: TriggersOnEnum


* `customer_points_change` (value: `"customer_points_change"`)

* `redemption` (value: `"redemption"`)

* `custom` (value: `"custom"`)





## Enum: TemplateEnum


* `discount` (value: `"discount"`)

* `loyalty` (value: `"loyalty"`)

* `gift_card` (value: `"gift_card"`)

* `sub_redemption` (value: `"sub_redemption"`)

* `sub_reward_points` (value: `"sub_reward_points"`)

* `sub_generate_vouchers` (value: `"sub_generate_vouchers"`)





## Enum: VoucherTypeEnum


* `unique` (value: `"unique"`)

* `generic` (value: `"generic"`)





## Enum: VoucherCodeTypeEnum


* `digits` (value: `"digits"`)

* `letters` (value: `"letters"`)

* `mixed` (value: `"mixed"`)




