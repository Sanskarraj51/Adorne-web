import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { fakeProducts } from 'src/@core/FakeData'
import BreadCrumb from 'src/@core/components/breadcrumb'
import { handleGetAPI } from 'src/api-requests'
import auth from 'src/configs/auth'
import { useDispatch, useSelector } from 'src/store'
import { fetchBrandData, fetchColorData } from 'src/store/apps/product'
import PopularProductCard from 'src/views/pages/product/PopularProductCard'

const SearchPage = () => {
  const [selectedColor, setSelectedColor] = useState([])
  const [selectedPrice, setSelectedPrice] = useState([])
  const [selectedBrand, setSelectedBrand] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const router = useRouter()
  const { query } = router?.query

  const store = useSelector(state => state.product)
  const { colors, brandData, sizes } = useSelector(state => state?.product)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchColorData())
    dispatch(fetchBrandData())
  }, [dispatch])

  async function searchAllProducts() {
    let res = await handleGetAPI(auth.productSearch + query)
    if (res) {
      setAllProducts(res?.data)
    }
  }

  useEffect(() => {
    if (query) {
      searchAllProducts()
    }
  }, [query])

  // eslint-disable-next-line
  return (
    <>
      <BreadCrumb path='All Products' />
      <div className='container'>
        <div className='row'>
          {/* <div className='col-lg-3 col-md-12 col-sm-12'>
            <div className='product-filter-container desktop_show'>
              <div className='filter-title'>
                <h3>Filters</h3>
                <a href='' className='clear-btn'>
                  Clear Filter
                </a>
              </div>
              <div className='option-wrapper filter'>
                <h3>Shop by Price</h3>
                <div className='option-price'>
                  <div className='price_filter'>
                    <div className='form-check'>
                      <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
                      <label className='form-check-label' for='flexRadioDefault1'>
                        $10 - $14.99
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault2' />
                      <label className='form-check-label' for='flexRadioDefault2'>
                        $15 - $29.99
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault3' />
                      <label className='form-check-label' for='flexRadioDefault3'>
                        $15 - $29.99
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault4' />
                      <label className='form-check-label' for='flexRadioDefault4'>
                        $15 - $29.99
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='option-wrapper'>
                <h3>Shop by Color</h3>
                <ul className='color_choice'>
                  {colors?.slice(0, 4)?.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => setSelectedColor(item?.id)}
                      className={selectedColor === item?.id ? 'selected' : ''}
                      style={{ background: item?.code }}
                    >
                      <a role='button' className='choice_color_one'></a>
                    </li>
                  ))}
               
                </ul>
              </div>

              <div className='option-wrapper'>
                <h3>Shop by Brand</h3>
                <div className='option-price'>
                  <div className='label-tags'>
                    {brandData?.map((item, i) => (
                      <div key={i} className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
                        <label className='form-check-label' for='flexCheckDefault'>
                          {item?.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='responsive_shown product-filter-container'>
              <div className='filter-title'>
                <div className='dropdown-overlay'></div>
                <div className='dropdown'>
                  <button
                    className='btn btn-default dropdown-toggle filter_overlay'
                    type='button'
                    id='filterToggle'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='true'
                  >
                    Filter
                    <span className='caret'></span>
                  </button>
                  <ul className='dropdown-menu default-menu-filter' aria-labelledby='filterToggle'>
                    <li>
                      {' '}
                      <div className='option-wrapper filter'>
                        <h3>Shop by Price</h3>
                        <div className='option-price'>
                          <div className='price_filter'>
                            <div className='form-check'>
                              <input
                                className='form-check-input'
                                type='radio'
                                name='flexRadioDefault'
                                id='flexRadioDefault1'
                              />
                              <label className='form-check-label' for='flexRadioDefault1'>
                                $10 - $14.99
                              </label>
                            </div>
                            <div className='form-check'>
                              <input
                                className='form-check-input'
                                type='radio'
                                name='flexRadioDefault'
                                id='flexRadioDefault2'
                              />
                              <label className='form-check-label' for='flexRadioDefault2'>
                                $15 - $29.99
                              </label>
                            </div>
                            <div className='form-check'>
                              <input
                                className='form-check-input'
                                type='radio'
                                name='flexRadioDefault'
                                id='flexRadioDefault3'
                              />
                              <label className='form-check-label' for='flexRadioDefault3'>
                                $15 - $29.99
                              </label>
                            </div>
                            <div className='form-check'>
                              <input
                                className='form-check-input'
                                type='radio'
                                name='flexRadioDefault'
                                id='flexRadioDefault4'
                              />
                              <label className='form-check-label' for='flexRadioDefault4'>
                                $15 - $29.99
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='option-wrapper'>
                        <h3>Shop by Color</h3>
                        <ul className='color_choice'>
                          <li className='active'>
                            <a href='' className='choice_color_one'></a>
                          </li>
                          <li>
                            <a href='' className='choice_color_two'></a>
                          </li>
                          <li>
                            <a href='' className='choice_color_three'></a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className='option-wrapper'>
                        <h3>Shop by Brand</h3>
                        <div className='option-price'>
                          <div className='label-tags'>
                            {brandData?.map((item, i) => (
                              <div key={i} className='form-check'>
                                <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
                                <label className='form-check-label' for='flexCheckDefault'>
                                  {item?.name}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          {/* neeche k div pe - col-lg-9 col-md-12  */}
          <div className='col-sm-12'>
            <div className='product-listing-header'>
              <div className='row align-items-center'>
                <div className='col-lg-7 col-md-6 col-sm-12'>
                  <div className='header-separation'>
                    <p>
                      Showing 1–{allProducts?.length} of {allProducts?.length} results
                    </p>
                  </div>
                </div>
                {/* <div class='col-lg-5 col-md-6 col-sm-12'>
                  <div class='sort-by'>
                    <div class='custom-select flex-grow-1 position-relative'>
                      <label for='sortBy'>Sort By</label>
                      <div class='input-wrap position-relative' id='inputWrap'>
                        <input type='text' placeholder='Newest' readonly class='border-0 p-2 w-100' />
                      </div>
                      <div
                        class='option d-none bg-white border border-dark border-top-0 position-absolute top-100 w-100'
                        id='option'
                      >
                        <p class='mb-0 px-2 py-2'>Default</p>
                        <p class='mb-0 px-2 py-2'>Newest</p>
                        <p class='mb-0 px-2 py-2'>Price (Low to High)</p>
                        <p class='mb-0 px-2 py-2'>Price (High to Low)</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className='row mt-1 mb-3'>
              {allProducts?.map((item, i) => (
                <div key={item} className='col-lg-3  col-md-4 col-sm-6 mt-3'>
                  <PopularProductCard mediaUrl={store?.data?.mediaUrl} item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchPage
