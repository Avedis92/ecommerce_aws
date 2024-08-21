import { useState } from "react";
import Field from "../field";
import SelectField from "../selectField";
import { initialAdminProductForm, initialProductInputError } from "./constant";
import { CategoryType, MessageTypeEnum } from "../../../shared/types";
import { IProductInputError, IProductInputForm } from "./types";
import { validateProductInputs, allFieldsAreEmpty } from "./helper";
import { addProduct } from "../../../shared/fetch/fetch";
import useAlert from "../../../hooks/useAlert";
import useAuth from "../../../hooks/useAuth";

const AdminAddProduct = () => {
  const [productForm, setProductForm] = useState<IProductInputForm>(
    initialAdminProductForm
  );
  const [productFormError, setProductFormError] = useState<IProductInputError>(
    initialProductInputError
  );
  const { showErrorMessage, showSuccessMessage } = useAlert();
  const { verifySessionValidity } = useAuth();

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
  const handleQuantityChange = (quantity: string) => {
    setProductForm({
      ...productForm,
      quantity,
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
      try {
        const product = {
          ...productForm,
          price: +productForm.price,
          quantity: +productForm.quantity,
          rating: +productForm.rating,
          creationDate: new Date().getTime(),
        };
        const accessToken = await verifySessionValidity();
        if (accessToken) {
          const res = await addProduct(product, accessToken as string);
          if (res.type === MessageTypeEnum.SUCCESS) {
            showSuccessMessage(res.message);
            setProductFormError(initialProductInputError);
            setProductForm(initialAdminProductForm);
          } else showErrorMessage(res.message);
        } else throw new Error("error");
      } catch {
        showErrorMessage("Product failed to be added. Try again");
      }
    }
  };
  return (
    <form className="bg-white my-4 mx-0 pl-8 pt-4 min-w-40 rounded-xl">
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
      <div className="flex justify-between items-center flex-wrap">
        <Field
          labelName="Price"
          placeholder="Type here"
          type="text"
          onChange={handlePriceChange}
          value={productForm.price}
          error={productFormError.priceError}
        />
        <Field
          labelName="Quantity"
          placeholder="Type here"
          type="text"
          onChange={handleQuantityChange}
          value={productForm.quantity}
          error={productFormError.quantityError}
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
      <button
        className="bg-cyan-600 w-40 text-xl text-white 
      font-bold border-none rounded-xl py-4 px-0 cursor-pointer
      mb-5 transform transition duration-200 ease-in-out hover:scale-110 active:scale-90"
        onClick={(e) => handleClick(e)}
      >
        Add
      </button>
    </form>
  );
};
export default AdminAddProduct;
