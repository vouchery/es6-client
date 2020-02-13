# VoucheryApi.RuleTimeOfOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Define when customer can trigger subcampaign: particular time of day and week days. | [default to &#39;time_of_order&#39;]
**startTime** | **String** | Time in 24-hour format: HH:MM | 
**endTime** | **String** | Time in 24-hour format: HH:MM | 
**daysOfWeek** | **[Number]** | Array of days of week, where Sunday is 0, Monday is 1, Saturday is 6 | 
**timeZone** | **String** | Time zone name as defined in the [tz database](http://www.iana.org/time-zones) (e.g. Europe/London) | 



## Enum: TypeEnum


* `time_of_order` (value: `"time_of_order"`)




