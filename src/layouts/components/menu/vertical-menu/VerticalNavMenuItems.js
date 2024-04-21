// ** React Imports
import { Fragment, useContext } from 'react'

// ** Vertical Menu Components
import VerticalNavMenuLink from './VerticalNavMenuLink'
import VerticalNavMenuGroup from './VerticalNavMenuGroup'
import VerticalNavMenuSectionHeader from './VerticalNavMenuSectionHeader'
import UserManagement from './UserManagement'

// ** Ability Context
import { AbilityContext } from '@src/utility/context/Can'

// ** Utils
import {
  resolveVerticalNavMenuItemComponent as resolveNavItemComponent,
  canViewMenuGroup,
  canViewMenuItem
} from '@layouts/utils'

const VerticalMenuNavItems = props => {
  // ** Context
  const ability = useContext(AbilityContext)

  // ** Components Object
  const Components = {
    VerticalNavMenuSectionHeader,
    VerticalNavMenuGroup,
    VerticalNavMenuLink
  }

  // ** Render Nav Menu Items
  const RenderNavItems = props.items.map((item, index) => {
    const TagName = Components[resolveNavItemComponent(item)]
    if (item.children) {
      return canViewMenuGroup(item) && <TagName item={item} index={index} key={item.id} {...props} />
    }
    if (canViewMenuItem(item)) {
      return (
        <Fragment key={item.id || item.header}>
          <TagName key={item.id || item.header} item={item} {...props} />
          {item.header === "User & Management" && (
            <UserManagement />
          )}
        </Fragment>
      )
    }
  })

  return RenderNavItems
}

export default VerticalMenuNavItems
