# VoucheryApi.Customer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifier** | **String** | Valid only for creating customer. Determines unique customer identifier in your application. Can be hash, id, email or any other unique value. | 
**name** | **String** | Customer full name. | [optional] 
**loyaltyPoints** | **Number** | Number of loyalty points customer will have. | [optional] 
**categories** | [**[CustomerCategories]**](CustomerCategories.md) | Determine how customer is related to specific category by providing related tag. | [optional] 
**metadata** | [**Object**](.md) | Any metadata, you want to store, related to customer. Key-value object, that will be displayed on customer profile page. | [optional] 
**createdAt** | **Date** |  | [optional] [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 


