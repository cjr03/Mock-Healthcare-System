# DefaultApi

All URIs are relative to *http://localhost:5001*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**appointmentsGet**](#appointmentsget) | **GET** /appointments | Get infusion appointments|
|[**notifyPharmacyPost**](#notifypharmacypost) | **POST** /notify-pharmacy | Notify pharmacy of scheduled infusion|
|[**patientsGet**](#patientsget) | **GET** /patients | Get all patients|

# **appointmentsGet**
> Array<Appointment> appointmentsGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.appointmentsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Appointment>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of appointments |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notifyPharmacyPost**
> NotifyResponse notifyPharmacyPost(notification)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    Notification
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let notification: Notification; //

const { status, data } = await apiInstance.notifyPharmacyPost(
    notification
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notification** | **Notification**|  | |


### Return type

**NotifyResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pharmacy notified successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patientsGet**
> Array<Patient> patientsGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.patientsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Patient>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of patients |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

