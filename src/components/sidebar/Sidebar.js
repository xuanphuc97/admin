import React from 'react';
import { AiFillAppstore, AiFillDashboard, AiOutlineMenu } from 'react-icons/ai';
import { Menu, MenuItem, ProSidebar, SubMenu } from 'react-pro-sidebar';
import './Sidebar.scss';
function sidebar(props) {
    return (
        <div className="sidebar">
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem icon={<AiFillDashboard className="icon" />}> Dashboard</MenuItem>
                    <SubMenu title="General" icon={<AiFillAppstore className="icon" />}>
                        <MenuItem>User</MenuItem>
                        <MenuItem>Announcement</MenuItem>
                    </SubMenu>
                    <SubMenu title="Problem" icon={<AiOutlineMenu className="icon" />}>
                        <MenuItem>Problem List</MenuItem>
                        <MenuItem>Create Problem</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        </div>
    );
}

export default sidebar;