import { useState } from "react";
import style from "./style.module.css";
import Field from "../field";
import SelectField from "../selectField";
import { initialAdminProductForm, initialProductInputError } from "./constant";
import { CategoryType } from "../../../shared/types";
import { IProductInputError, IProductInputForm } from "./types";
import { validateProductInputs, allFieldsAreEmpty } from "./helper";
// import useAlert from "../../../hooks/useAlert";

const AdminAddProduct = () => {
  const { mainFormContainer, priceRatingContainer } = style;
  const [productForm, setProductForm] = useState<IProductInputForm>(
    initialAdminProductForm
  );
  const [productFormError, setProductFormError] = useState<IProductInputError>(
    initialProductInputError
  );
  // const { showErrorMessage, showSuccessMessage } = useAlert();

  const handleTitleChange = (title: string) => {
    setProductForm({
      ...productForm,
      title,
    });
  };
  const handleDescriptionChange = (description: string) => {
    setProductForm({
      ...productForm,
      description,
    });
  };
  const handleImageSourceChange = (imageSource: string) => {
    setProductForm({
      ...productForm,
      imageSource,
    });
  };
  const handlePriceChange = (price: string) => {
    setProductForm({
      ...productForm,
      price,
    });
  };
  const handleRatingChange = (rating: string) => {
    setProductForm({
      ...productForm,
      rating,
    });
  };
  const handleCategoryChange = (category: string) => {
    setProductForm({
      ...productForm,
      category: category as CategoryType,
    });
  };
  // @ts-ignore
  const handleClick = async (e) => {
    e.preventDefault();
    const errorFields = validateProductInputs(
      productForm,
      initialProductInputError
    );
    if (!allFieldsAreEmpty(errorFields)) {
      setProductFormError(errorFields);
    } else {
      /*try {
        const ref = collection(db, CollectionEnum.PRODUCTS);
        await addDoc(ref, {
          ...productForm,
          price: +productForm.price,
          rating: +productForm.rating,
          creationDate: new Date().getTime(),
        });
        setProductFormError(initialProductInputError);
        setProductForm(initialAdminProductForm);
        showSuccessMessage("Product successfully added");
      } catch (e) {
        showErrorMessage("Product failed to be added. Try again");
      } */
    }
  };
  return (
    <form className={mainFormContainer}>
      <Field
        labelName="Product Title"
        placeholder="Type here"
        type="text"
        onChange={handleTitleChange}
        value={productForm.title}
        error={productFormError.titleError}
      />
      <Field
        labelName="Product Description"
        placeholder="Type here"
        type="text"
        onChange={handleDescriptionChange}
        value={productForm.description}
        error={productFormError.descriptionError}
      />
      <Field
        labelName="Image source"
        placeholder="Type here"
        type="text"
        onChange={handleImageSourceChange}
        value={productForm.imageSource}
        error={productFormError.imageSourceError}
      />
      <div className={priceRatingContainer}>
        <Field
          labelName="Price"
          placeholder="Type here"
          type="text"
          onChange={handlePriceChange}
          value={productForm.price}
          error={productFormError.priceError}
        />
        <Field
          labelName="Rating"
          placeholder="Type here"
          type="text"
          onChange={handleRatingChange}
          value={productForm.rating}
          error={productFormError.ratingError}
        />
      </div>
      <SelectField
        labelName="Product Category"
        onChange={handleCategoryChange}
        value={productForm.category}
      />
      <button onClick={(e) => handleClick(e)}>Add</button>
    </form>
  );
};
export default AdminAddProduct;
