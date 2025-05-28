import iconManager from '@/assets/icons/iconManager.svg';
import { Alert, Tabs, Typography } from '@/components/shared';
import { useState } from 'react';
const Home = () => {
  console.log('Home');
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [switchValue, setBox] = useState(true);
  const [age, setAge] = useState(10);
  const items = [
    {
      id: 1,
      icon: <img src={iconManager} alt="Home Icon" width={20} height={20} />,
      primary: 'Home',
      secondary: 'Go to homepage',
      onClick: () => alert('Navigating to Home'),
    },
    {
      id: 2,
      icon: <img src={iconManager} alt="Home Icon" width={20} height={20} />,
      primary: 'Settings',
      secondary: 'Manage preferences',
    },
    {
      id: 3,
      primary: 'Custom Content',
      customContent: <Typography color="primary">⚡ Power Mode</Typography>,
    },
  ];
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConfirm = () => {
    alert('Confirmed!');
    setOpen(false);
  };
  const dialogContent = <Typography>Are you sure you want to proceed?</Typography>;
  const tabItems = [
    {
      label: 'Overview',
      content: (
        <Alert severity="success" className="my-4">
          Profile updated successfully!
        </Alert>
      ),
    },
    {
      label: 'Details',
      content: <Typography>Detailed info displayed here.</Typography>,
    },
    {
      label: 'Settings',
      content: <Typography>Configure your settings here.</Typography>,
      disabled: true,
    },
  ];
  return (
    // <Box sx={classes.layout}>
    //   {/* <Button variant="contained">hello</Button>
    //   <Button variant="outlined">Click me</Button>
    //   <Select
    //     value={age}
    //     onChange={e => setAge(e.target.value)}
    //     label="Age"
    //     options={[
    //       { label: 'Ten', value: 10 },
    //       { label: 'Twenty', value: 20 },
    //       { label: 'Thirty', value: 30 },
    //     ]}
    //   />
    //   <Checkbox
    //     value={switchValue}
    //     label="Testing"
    //     onChange={() => {
    //       console.log('switchValue', switchValue);
    //       setBox(!switchValue);
    //     }}
    //   />
    //   <Checkbox
    //     value={switchValue}
    //     disabled
    //     defaultChecked
    //     onChange={() => {
    //       console.log('switchValue', switchValue);
    //       setBox(!switchValue);
    //     }}
    //   />
    //   <Switch defaultChecked value={switchValue} />
    //   <TextField
    //     label="Email address"
    //     placeholder="you@example.com"
    //     className="w-full"
    //     labelClassName="text-sm text-gray-800"
    //   />
    //   <Badge color="secondary" overlap="circular" badgeContent=" ">
    //     <Avatar src="https://i.pravatar.cc/150?img=4" alt="Jane" className="w-10 h-10" />
    //   </Badge>
    //   <Chip
    //     label="Active"
    //     color="primary"
    //     variant="outlined"
    //     onDelete={() => console.log('Deleted')}
    //     className="text-sm px-2"
    //   />
    //   <Divider />

    //   <List items={items} />

    //   <Alert severity="success" className="my-4" icon={<img src={iconManager} alt="Home Icon" />}>
    //     Profile updated successfully!
    //   </Alert>

    //   <Alert severity="error" className="my-4">
    //     Profile updated successfully!
    //   </Alert>
    //   <Alert className="my-4">Profile updated successfully!</Alert> */}
    //   {/* <Skeleton variant="rectangular" width={300} height={200} className="rounded-xl" />
    //   <Skeleton variant="text" width="60%" height={24} />
    //   <Skeleton variant="circular" width={40} height={40} /> */}
    //   {/*
    //   <Button onClick={handleOpen}>Open Dialog</Button>
    //   <Dialog
    //     open={open}
    //     onClose={() => setOpen(false)}
    //     title="Confirm Action"
    //     dialogContent={dialogContent}
    //     actions={
    //       <>
    //         <Button onClick={() => setOpen(false)} variant="text">
    //           Cancel
    //         </Button>
    //         <Button onClick={handleConfirm} variant="contained">
    //           Confirm
    //         </Button>
    //       </>
    //     }
    //   /> */}
    //   {/* <Checkbox
    //     value={switchValue}
    //     defaultChecked
    //     onChange={() => {
    //       console.log('switchValue', switchValue);
    //       setBox(!switchValue);
    //     }}
    //   /> */}
    //   <div>
    //     <Button variant="contained" onClick={handleOpen}>
    //       Show Notification
    //     </Button>

    //     <Snackbar
    //       open={open}
    //       onClose={handleClose}
    //       message="This is a success alert"
    //       severity="info"
    //       autoHideDuration={10000}
    //     />
    //   </div>
    //   {/* <Accordion summary="What is your return policy?">
    //     <Typography>
    //       You can return any item within 30 days of purchase if it is unused and in its original
    //       packaging.
    //     </Typography>
    //   </Accordion> */}
    //   <Card
    //     title="Account Overview"
    //     cardContent={
    //       <>
    //         <Typography variant="body1">Name: Jane Doe</Typography>
    //         <Typography variant="body2" color="textSecondary">
    //           Email: jane.doe@example.com
    //         </Typography>
    //       </>
    //     }
    //     actions={
    //       <>
    //         <Button variant="text">Cancel</Button>
    //         <Button variant="contained">Save</Button>
    //       </>
    //     }
    //   />

    //   {/* <Breadcrumbs
    //     items={[
    //       { label: 'Home', href: '/', icon: <img src={iconManager} alt="Home Icon" /> },
    //       { label: 'Settings', href: '/settings', icon: <img src={iconManager} alt="Home Icon" /> },
    //       { label: 'Profile', isCurrent: true },
    //     ]}
    //   /> */}

    //   {/* <Button onClick={() => setOpen(true)}>Open Drawer</Button>
    //   <Drawer open={open} onClose={() => setOpen(false)} title="My Drawer">
    //     <Typography>This is the content inside the drawer.</Typography>
    //   </Drawer> */}
    // </Box>
    <Tabs
      tabs={tabItems}
      defaultIndex={0}
      className="custom-tabs-wrapper"
      contentClassName="custom-tab-content"
    />
  );
};

export default Home;
