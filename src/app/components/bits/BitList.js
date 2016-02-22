import React, { Component, PropTypes } from 'react'
import BitItem from './BitItem'
import './BitList.css'

export default class BitList extends Component {
  render() {
    const { editBit, deleteBit, addBit } = this.props.actions

    const bits = this.props.bits.map((bit) =>
      <BitItem
        key={bit.id}
        bit={bit}
        editBit={editBit}
        deleteBit={deleteBit}
        addBit={addBit}
        />
    )

    return (
      <ul className="bitList">
        {bits}
      </ul>
    )
  }
}

BitList.proptypes = {
  bits: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}
