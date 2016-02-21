import React, { Component, PropTypes } from 'react'
import BitItem from './BitItem'

export default class BitList extends Component {
  render() {
    const bits = this.props.bits.map((bit) =>
      <BitItem
        key={bit.id}
        bit={bit}
        editBit={this.props.editBit}
        deleteBit={this.props.deleteBit}
        addBit={this.props.addBit}
        />
    )

    return (
      <ul>
        {bits}
      </ul>
    )
  }
}

BitList.proptypes = {
  bits: PropTypes.array.isRequired,
  editBit: PropTypes.func.isRequired,
  deleteBit: PropTypes.func.isRequired,
  addBit: PropTypes.func.isRequired
}
