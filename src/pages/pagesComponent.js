import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Icon } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import { NULL } from 'sass';

const drawerWidth = 240;


export function PagesComponent() {
    const navigate = useNavigate()
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [menuOpen, setMenuOpen] = React.useState(true)

    // function handleClick(){
    //     setMenuOpen(!menuOpen)
    // }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>

                    <Typography variant="h6" noWrap component="div">
                        Admin Pannel
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    {/* <IconButton>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton> */}
                </DrawerHeader>
                <Divider />
                <List>
                    {/* {['Dashboard', 'Categories', 'Product', 'order', 'User'].map((text, index) => ( */}

                    {[{ id: 1, title: "Dashboard", route: "dashboard", Icon: <AppsIcon />, iscollapseable: true, childs: [{ id: 6, title: "Dashboard", route: "dashboard", Icon: <AppsIcon />, }] },
                    { id: 2, title: "Categories", route: "categories", Icon: <AssignmentReturnedIcon />, iscollapseable: true, childs: [{ id: 6, title: "Dashboard", route: "dashboard", Icon: <AppsIcon />, }] },
                    {
                        id: 3, title: "Product", route: "product", Icon: <InboxIcon />, iscollapseable: true, childs: [
                            { id: 6, title: "Dashboard", route: "dashboard", Icon: <AppsIcon />, },
                            { id: 5, title: "Categories", route: "categories", Icon: <AssignmentReturnedIcon />, },
                        ]
                    },
                    { id: 4, title: "Order", route: "order", Icon: <InboxIcon />, },
                    { id: 5, title: "user", route: "user", Icon: <InboxIcon />, },

                    ].map((obj, index) => (
                        <React.Fragment key={obj.title}>
                            <ListItemButton onClick={() => {
                                navigate(obj.route)
                            }}>
                                <ListItemIcon>
                                    {obj.Icon}
                                </ListItemIcon>
                                <ListItemText primary={obj.title} onClick={() => {
                                    if (obj.iscollapseable) {
                                        setMenuOpen(!menuOpen)
                                    }
                                }} />

                                {obj.iscollapseable && <>
                                    {menuOpen ? <ExpandLess /> : <ExpandMore />}
                                </>}

                            </ListItemButton>
                            {obj.iscollapseable &&
                                <Collapse in={menuOpen} timeout="auto" unmountOnExit>
                                    <List component="div" >
                                        {
                                            obj.childs.map(child => {
                                                return <>
                                                    <ListItemButton sx={{ pl: 4 }}>
                                                        <ListItemIcon>
                                                            {child.Icon}
                                                        </ListItemIcon>
                                                        <ListItemText primary={child.title} />
                                                    </ListItemButton>
                                                </>
                                            })
                                        }
                                    </List>
                                </Collapse>
                            }

                        </React.Fragment>
                        // </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <div>
                    <Routes>
                        <Route path='/' element={<Navigate to={"dashboard"} replace={true}></Navigate>}></Route>
                        <Route path='dashboard' element={<div>Dashboard123</div>}></Route>
                        <Route path='categories' element={<div>Categories</div>}></Route>
                        <Route path='product' element={<div>product</div>}></Route>
                        <Route path='order' element={<div>order</div>}></Route>
                        <Route path='user' element={<div>User </div>}></Route>
                    </Routes>
                </div>
            </Main>
        </Box>

    );
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })
    (({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }));


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));