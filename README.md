# DashboardTest

## Configurator endpoint

Unity downloads the configurator data from the `/api/configurator/latest` endpoint. The service returns a JSON payload structured like `samples/configurator_example.json`.

Example request:

```http
GET https://yourdomain.com/api/configurator/latest
```

This JSON describes available models, versions, textures and other parameters used by the Unity application.
