# VoucheryApi.ErrorErrors

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **String** | Attribute name | [optional] 
**code** | **String** | Machine-readable API error code | [optional] 
**message** | **String** | Human-readable error message | [optional] 
**boundaryValue** | **String** | Minimum, maximum, or expected value for this attribute | [optional] 



## Enum: CodeEnum


* `required` (value: `"required"`)

* `below_minimum` (value: `"below_minimum"`)

* `above_maximum` (value: `"above_maximum"`)

* `unexpected_value` (value: `"unexpected_value"`)

* `must_be_unique` (value: `"must_be_unique"`)

* `should_match_confirmation` (value: `"should_match_confirmation"`)

* `must_be_accepted` (value: `"must_be_accepted"`)

* `must_be_null` (value: `"must_be_null"`)

* `too_short` (value: `"too_short"`)

* `too_long` (value: `"too_long"`)

* `wrong_length` (value: `"wrong_length"`)

* `invalid` (value: `"invalid"`)

* `invalid_date` (value: `"invalid_date"`)

* `invalid_time` (value: `"invalid_time"`)

* `invalid_datetime` (value: `"invalid_datetime"`)

* `not_allowed_to_have_vouchers` (value: `"not_allowed_to_have_vouchers"`)

* `already_confirmed` (value: `"already_confirmed"`)

* `expired` (value: `"expired"`)

* `missing_required_tags` (value: `"missing_required_tags"`)

* `includes_forbidden_tags` (value: `"includes_forbidden_tags"`)

* `missing_required_category` (value: `"missing_required_category"`)

* `outside_of_permitted_areas` (value: `"outside_of_permitted_areas"`)

* `not_valid_at_this_time` (value: `"not_valid_at_this_time"`)

* `maximum_redemptions_exceeded` (value: `"maximum_redemptions_exceeded"`)

* `budget_exceeded` (value: `"budget_exceeded"`)

* `new_customer_required` (value: `"new_customer_required"`)

* `per_customer_limit_exceeded` (value: `"per_customer_limit_exceeded"`)

* `time_limit_expired` (value: `"time_limit_expired"`)

* `redemptions_limit_exceeded` (value: `"redemptions_limit_exceeded"`)

* `below_campaign_minimum` (value: `"below_campaign_minimum"`)

* `unknown_tags` (value: `"unknown_tags"`)

* `does_not_match_assigned_customer` (value: `"does_not_match_assigned_customer"`)

* `not_active` (value: `"not_active"`)

* `unique_code_already_used` (value: `"unique_code_already_used"`)

* `not_match` (value: `"not_match"`)

* `can_not_expire_redeemed` (value: `"can_not_expire_redeemed"`)




