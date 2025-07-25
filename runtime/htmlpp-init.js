// htmlpp-init.js – Initializes all HTML++ component behaviors

import { init_x_pagination } from "./components/x-pagination.js";
import { init_x_fetch } from "./components/x-fetch.js";
import { init_x_form } from "./components/x-form.js";
import { init_x_state } from "./components/x-state.js";
import { init_x_toggle } from "./components/x-toggle.js";
import { init_x_modal } from "./components/x-modal.js";
import { init_x_swap } from "./components/x-swap.js";
import { init_x_router } from "./components/x-router.js";
import { init_x_list } from "./components/x-list.js";
import { init_x_if } from "./components/x-if.js";
import { init_x_params } from "./components/x-params.js";
import { init_x_accordion } from "./components/x-accordion.js";
import { init_x_slot } from "./components/x-slot.js";
import { init_x_copy } from "./components/x-copy.js";
import { init_x_fallback } from "./components/x-fallback.js";
import { init_x_loader } from "./components/x-loader.js";

export function initHTMLPP() {
  init_x_pagination();
  init_x_fetch();
  init_x_form();
  init_x_state();
  init_x_toggle();
  init_x_modal();
  init_x_swap();
  init_x_router();
  init_x_list();
  init_x_if();
  init_x_params();
  init_x_accordion();
  init_x_slot();
  init_x_copy();
  init_x_fallback();
  init_x_loader();
  console.log('HTML++ runtime fully initialized');
}
