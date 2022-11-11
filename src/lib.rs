#![deny(clippy::all)]

use napi::{Env, bindgen_prelude::*, JsUnknown};
use napi::NapiRaw;
use napi::sys::napi_value;
use serde_json::*;
use napi_derive::napi;

#[napi]
pub fn parse(env: Env, input: String) -> Option<JsUnknown> {
    match from_str::<Value>(&input).iter().flat_map(|it|
        env.to_js_value(it)
    ).next() {
        Some(value) => Some(value),
        None => {
            env.throw_error("Illegal JSON syntax", None).unwrap();
            None
        }
    }
}

// #[napi]
// pub fn stringify(input: Object) -> String {
//   input.
// }
