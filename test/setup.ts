import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import { vi } from "vitest";
expect.extend(matchers);

afterEach(() => {
  cleanup();
});
