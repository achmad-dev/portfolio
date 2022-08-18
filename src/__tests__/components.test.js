import { screen, render } from "@testing-library/react";
import { NavBar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";

test("it should render Navbar properly", () => {
  render(<NavBar />);
  expect(screen.getByText("Home")).toBeInTheDocument();
});


test("it should render Footer properly", () => {
    render(<Footer />);
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    }
)
