import {IconButton, InputAdornment, Grid, TextField,InputLabel,MenuItem, FormControl} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export const Input = ({name,handleChange,label,autoFocus,type,handleShowPassword,half,defaultValue}) =>{
    return(
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name ={name}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                InputLabelProps={{
                    shrink: true,
                  }}
                label={label}
                autoFocus={autoFocus}
                type={type}
                defaultValue={defaultValue}
                InputProps = {name === 'password' ? {
                    endAdornment:(
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === "password" ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                }: null}
            />
        </Grid>
    )
}