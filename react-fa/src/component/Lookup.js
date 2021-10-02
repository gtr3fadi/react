import React, { Component } from 'react'

class Lookup extends Component {
    //lookup page

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="card-title">Lookup</h4>
                      <p className="card-description">
                        Lookup is a feature that lets you search for a specific
                        record.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label>
                                  <h5>
                                    <b>Lookup</b>
                                  </h5>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Lookup"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Lookup
