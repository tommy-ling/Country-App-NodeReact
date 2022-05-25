export const searchStyle={
  backgroundColor: 'white',
  width: {xs: 250, md: 450},
  height: {xs: 45, md: 55},
  justifyContent: 'center',
  boxShadow: '0px 0px 10px 5px #E6E6E6',
  "& .MuiOutlinedInput-notchedOutline": {
    border: "0 none",
  },
  "& label" : {
    top: {xs: -5, md: 0}
  }
}
export const selectStyle={
  backgroundColor: 'white',
  width: 160,
  marginTop: {xs: 4, sm: 0, md: 0},
  height: {xs: 45, md: 55},
  boxShadow: '0px 0px 10px 5px #E6E6E6',
  "& .MuiOutlinedInput-notchedOutline": {
    border: "0 none"
  },
}
export const searchStyleDk={
  backgroundColor: '#3e4355',
  width: {xs: 250, md: 450},
  height: {xs: 45, md: 55},
  justifyContent: 'center',
  "& .MuiOutlinedInput-notchedOutline": {
    border: "0 none",
  },
  "& label" : {
    top: {xs: -5, md: 0},
  },
}
export const selectStyleDk={
  backgroundColor: '#3e4355',
  width: 160,
  marginTop: {xs: 4, sm:0, md: 0},
  height: {xs: 45, md: 55},
  color: 'white',
  "& .MuiOutlinedInput-notchedOutline": {
    border: "0 none",
  },
  "& .MuiSvgIcon-root" : {
    color: "white"
  }
}
export const MenuItemStyleDk={
  backgroundColor:'#3e4355',
  color: 'white',
  '&:hover': {
    backgroundColor: '#646877'
  }
}
export const MenuListStyle = {
  '& .MuiList-root': {
    padding: 0
  }
}
export const MenuItemSelected = {
  "&& .Mui-selected": {
    backgroundColor: '#646877',
    color: 'white',
    '&:hover': {
      color: 'white',
      backgroundColor:'#646877'
    },
    "&:focus": {
      backgroundColor:'#646877'
    }
  }
}