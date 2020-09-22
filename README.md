---
page_type: sample
description: An Azure Maps Web SDK module that synchronizes the cameras of two or more maps.
languages:
- javascript
- typescript
products:
- azure
- azure-maps
---

# Azure Maps Sync Maps module

An Azure Maps Web SDK module that synchronizes the cameras of two or more maps. 

[Try the demo](https://azuremapscodesamples.azurewebsites.net/index.html?sample=Synchronize%20map%20views)

![Azure Maps Sync Maps module](https://github.com/Azure-Samples/AzureMapsCodeSamples/raw/master/AzureMapsCodeSamples/SiteResources/screenshots/Synchronize-map-views.gif)

## Getting started

Download the project and copy the `azure-maps-sync-maps` JavaScript file from the `dist` folder into your project. 

**Usage**

This module exports a static function on the `atlas` namespace called `syncMaps`. Pass two or more maps into the `atlas.syncMaps` function to synchronize them.

```JavaScript
var map1 = new atlas.Map('map1', { });
var map2 = new atlas.Map('map2', { });

atlas.syncMaps(map1, map2);

//Alternatively, an array of maps can also be passed in.
atlas.syncMaps([map1, map2]);
```

## API Reference

| Name | Return type | Description |
|------|-------------|-------------|
| `syncMaps(maps: azmaps.Map[])` | `MapSynchronizer` | Disposes a setInterval instance. |

### MapSynchronizer interface

A class that synchronizes the cameras of two or more maps.

**Methods** 

| Name | Return type | Description |
|------|-------------|-------------|
| `disable()` | | Disables the synchronization of the maps. |
| `dispose()` | | Disposes the map synchronizer. |
| `enable()` | | Enables the synchronization of the maps. |
| `isEnabled()` | `boolean` | Get sthe enabled state. |

## Related Projects

**Open Azure Maps Web SDK modules**

* [Azure Maps Animation module](https://github.com/Azure-Samples/azure-maps-animations)
* [Azure Maps Geolocation Control module](https://github.com/Azure-Samples/azure-maps-geolocation-control)
* [Azure Maps Fullscreen Control module](https://github.com/Azure-Samples/azure-maps-fullscreen-control)
* [Azure Maps Selection Control module](https://github.com/Azure-Samples/azure-maps-selection-control)
* [Azure Maps Services UI module](https://github.com/Azure-Samples/azure-maps-services-ui)

**Additional projects**

* [Azure Maps Web SDK Samples](https://github.com/Azure-Samples/AzureMapsCodeSamples)
* [Azure Maps Gov Cloud Web SDK Samples](https://github.com/Azure-Samples/AzureMapsGovCloudCodeSamples)
* [Azure Maps & Azure Active Directory Samples](https://github.com/Azure-Samples/Azure-Maps-AzureAD-Samples)
* [List of open-source Azure Maps projects](https://github.com/microsoft/Maps/blob/master/AzureMaps.md)

## Additional Resources

* [Azure Maps (main site)](https://azure.com/maps)
* [Azure Maps Documentation](https://docs.microsoft.com/azure/azure-maps/index)
* [Azure Maps Blog](https://azure.microsoft.com/blog/topics/azure-maps/)
* [Microsoft Q&A](https://docs.microsoft.com/answers/topics/azure-maps.html)
* [Azure Maps feedback](https://feedback.azure.com/forums/909172-azure-maps)

## Contributing

We welcome contributions. Feel free to submit code samples, file issues and pull requests on the repo and we'll address them as we can. 
Learn more about how you can help on our [Contribution Rules & Guidelines](https://github.com/Azure-Samples/azure-maps-sync-maps/blob/master/CONTRIBUTING.md). 

You can reach out to us anytime with questions and suggestions using our communities below:
* [Microsoft Q&A](https://docs.microsoft.com/answers/topics/azure-maps.html)
* [Azure Maps feedback](https://feedback.azure.com/forums/909172-azure-maps)

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). 
For more information, see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or 
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## License

MIT
 
See [License](https://github.com/Azure-Samples/azure-maps-sync-maps/blob/master/LICENSE.md) for full license text.