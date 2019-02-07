import React from "react"
import { shallow, mount } from "enzyme"
import ImageShowcase, { Image } from "./ImageShowcase"

const showcaseImages = [
  {
    imgSrc: "",
    headerText: "Header",
    subheaderText: "Subheader",
  },
  {
    imgSrc: "",
    headerText: "Header",
    subheaderText: "Subheader",
  },
  {
    imgSrc: "",
    headerText: "Header",
    subheaderText: "Subheader",
  },
]

it("renders without crashing", () => {
  shallow(<ImageShowcase />)
})

it("renders all images on the left when checkered=false and flip=false", () => {
  const wrapper = mount(
    <ImageShowcase
      showcaseImages={showcaseImages}
      checkered={false}
      flip={false}
    />,
  )
  const images = wrapper.find(Image)
  const firstImage = images.first()
  const secondImage = images.at(1)

  expect(images.length).toEqual(3)
  expect(firstImage.hasClass("order-lg-2")).toEqual(false)
  expect(secondImage.hasClass("order-lg-2")).toEqual(false)
})

it("renders all images on the right when checkered=false and flip=true", () => {
  const wrapper = mount(
    <ImageShowcase
      showcaseImages={showcaseImages}
      checkered={false}
      flip={true}
    />,
  )
  const images = wrapper.find(Image)
  const firstImage = images.first()
  const secondImage = images.at(1)

  expect(images.length).toEqual(3)
  expect(firstImage.hasClass("order-lg-2")).toEqual(true)
  expect(secondImage.hasClass("order-lg-2")).toEqual(true)
})

it("renders the first image on the left and the second image on right when checkered=true", () => {
  const wrapper = mount(
    <ImageShowcase
      showcaseImages={showcaseImages}
      checkered={true}
      flip={false}
    />,
  )
  const images = wrapper.find(Image)
  const firstImage = images.first()
  const secondImage = images.at(1)

  expect(images.length).toEqual(3)
  expect(firstImage.hasClass("order-lg-2")).toEqual(false)
  expect(secondImage.hasClass("order-lg-2")).toEqual(true)
})

it("renders the first image on the right and the second image on left when checkered=true and flip=true", () => {
  const wrapper = mount(
    <ImageShowcase
      showcaseImages={showcaseImages}
      checkered={true}
      flip={true}
    />,
  )
  const images = wrapper.find(Image)
  const firstImage = images.first()
  const secondImage = images.at(1)

  expect(images.length).toEqual(3)
  expect(firstImage.hasClass("order-lg-2")).toEqual(true)
  expect(secondImage.hasClass("order-lg-2")).toEqual(false)
})
