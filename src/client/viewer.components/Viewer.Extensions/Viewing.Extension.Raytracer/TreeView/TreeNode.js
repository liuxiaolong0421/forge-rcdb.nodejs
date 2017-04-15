import EventsEmitter from 'EventsEmitter'

///////////////////////////////////////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////////////////
export default class TreeNode extends EventsEmitter {

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  constructor (props) {

    super ()

    this.parent = props.parent
    this.group  = props.group
    this.name   = props.name
    this.type   = props.type
    this.id     = props.id
  }
}