
import ClientAPI from 'ClientAPI'
import BaseSvc from './BaseSvc'

export default class ModelSvc extends BaseSvc {

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  constructor (config) {

    super (config)

    this.api = new ClientAPI(config.apiUrl)
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  name() {

    return 'GallerySvc'
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  getModels () {

    const url = `${this._config.apiUrl}/models`

    return this.api.ajax(url)
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  getModel (modelId) {

    const url = `${this._config.apiUrl}/models/${modelId}`

    return this.api.ajax(url)
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  getThumbnail (modelId) {

    const url = `${this._config.apiUrl}/thumbnails`

    return this.api.ajax({
      url: url,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(modelIds)
    })
  }
}