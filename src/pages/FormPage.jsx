import React, { useEffect } from 'react'
import MyNavbar from '../components/MyNavbar'
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import { addProduct, getProductById, updateProduct } from '../apis/Index';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function FormPage() {

  const { register, handleSubmit, reset, setValue } = useForm();

  const { id } = useParams();
  const isEdit = Boolean(id);

  useEffect(() => {
    const loadData = async () => {
      if (!isEdit) return;
      try {
        let res = await getProductById(id);
        let formData = res.data
        Object.keys(formData).forEach((key) => {
          setValue(key, formData[key]);
        })
      } catch (error) {
        console.log(error);
        toast.error("Failed to load product")
      }
    }
    loadData();
  }, [id, isEdit, setValue])

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    })

    const fileInput = document.getElementById("image");
    if (fileInput && fileInput.files[0]) {
      formData.append("image", fileInput.files[0]);
    }
    // data.image = 'data:image/jpeg;base64,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'
    try {
      // console.log(formData); 
      let res = isEdit ? await updateProduct(id, formData) : await addProduct(formData); //
      console.log(res);
      toast.success('success');
      reset();
    } catch (error) {
      if(error.code === 401){
        toast.error('Unauthorized')
      } else {
        toast.error(error.response.data.error);
      }
    }
  };

  return (
    <div>
      <MyNavbar />
      <Container>
        <Box margin={5}
          padding={3}
          component={Paper}
          elevation={24}
          sx={{
            backgroundColor: "white",
          }}>

          <Typography align='center' variant='h4' sx={{ marginBottom: 5 }}>
            {isEdit ? "Edit Product" : "Add Product"}
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container justifyContent={"center"} spacing={4} >

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="outlined" align="center" fontSize={20}>Title</Typography>
                <TextField id="outlined-basic" sx={{ width: "100%" }} {...register("title")} variant='outlined' />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="outlined" align="center" fontSize={20}>Category</Typography>
                <TextField id="outlined-basic" sx={{ width: "100%" }} {...register("category")} variant='outlined' />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="outlined" align="center" fontSize={20}>Description</Typography>
                <TextField id="outlined-basic" sx={{ width: "100%" }} {...register("description")} variant='outlined' />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="outlined" align="center" fontSize={20}>Quantity</Typography>
                <TextField id="outlined-basic" sx={{ width: "100%" }} {...register("quantity")} variant='outlined' />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="outlined" align="center" fontSize={20}>Price</Typography>
                <TextField id="outlined-basic" sx={{ width: "100%" }} {...register("price")} variant='outlined' />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography fontSize={20}>Upload image</Typography>
                <input type='file' name='image' id='image' />
              </Grid>

              <Button variant="contained" sx={{ width: "30%", marginTop: 4, marginBottom: 4 }} type="submit">
                {isEdit ? "Update" : "Add"}
              </Button>

            </Grid>
          </form>

        </Box>
      </Container>
    </div >
  )
}