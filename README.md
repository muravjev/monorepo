# Monorepo | 2023

This is sample monorepo with `pnpm` + `typescript` + `eslint` + `prettier` + `remark` + `husky` + `lintstaged` + `commitlint` + `changesets` + `syncpack`.

## Intro

Monorepo configured in accordance with [Monorepo Configuration | 2023](https://github.com/muravjev/configs/blob/main/README.md) and consist out of the followinig packages:

```bash
└─ monorepo # <- monorepo root package
   ├─ apps
   │  └─ foo # <- typescript next application
   └─ packages
      ├─ bar # <- typescript utils libarary
      └─ baz # <- react components libarary
```

All packages ensure strict coding standards and facilitate coding experience with code hints and navigation. Lib package `baz` and react lib package `bar` has jest tests and are integrated into app next package `foo`

## Commits

Here are steps that where undertook with corresponded commits:

- [Create monorepo](https://github.com/muravjev/monorepo/pull/1)

  - <code>[d84f969](https://github.com/muravjev/monorepo/commit/d84f969)</code> - setup package
  - <code>[0a01bb1](https://github.com/muravjev/monorepo/commit/0a01bb1)</code> - setup prettier
  - <code>[76538c2](https://github.com/muravjev/monorepo/commit/76538c2)</code> - setup eslint
  - <code>[aeb86bd](https://github.com/muravjev/monorepo/commit/aeb86bd)</code> - setup remark
  - <code>[5ba3a04](https://github.com/muravjev/monorepo/commit/5ba3a04)</code> - setup commitlint
  - <code>[52dc62b](https://github.com/muravjev/monorepo/commit/52dc62b)</code> - setup lint-staged
  - <code>[8cf5e9c](https://github.com/muravjev/monorepo/commit/8cf5e9c)</code> - setup husky
  - <code>[fcad55a](https://github.com/muravjev/monorepo/commit/fcad55a)</code> - setup changesets
  - <code>[e57609b](https://github.com/muravjev/monorepo/commit/e57609b)</code> - setup syncpack
  - <code>[dbeb48c](https://github.com/muravjev/monorepo/commit/dbeb48c)</code> - add fix script

- [Create lib baz](https://github.com/muravjev/monorepo/pull/2)

  - <code>[1406e09](https://github.com/muravjev/monorepo/commit/1406e09)</code> - chore(baz): create lib package
  - <code>[41dc1df](https://github.com/muravjev/monorepo/commit/41dc1df)</code> - chore(baz): setup ts
  - <code>[5cf3bc5](https://github.com/muravjev/monorepo/commit/5cf3bc5)</code> - chore(baz): add src
  - <code>[c8edf18](https://github.com/muravjev/monorepo/commit/c8edf18)</code> - chore(baz): setup jest-ts
  - <code>[c28ff28](https://github.com/muravjev/monorepo/commit/c28ff28)</code> - chore(baz): add test

- [Create lib react bar](https://github.com/muravjev/monorepo/pull/3)

  - <code>[c6f1ef3](https://github.com/muravjev/monorepo/commit/c6f1ef3)</code> - chore(bar): create react package
  - <code>[02d45b4](https://github.com/muravjev/monorepo/commit/02d45b4)</code> - chore(bar): setup ts-react
  - <code>[0d625c4](https://github.com/muravjev/monorepo/commit/0d625c4)</code> - chore(bar): setup eslint-ts-react
  - <code>[7259d0e](https://github.com/muravjev/monorepo/commit/7259d0e)</code> - chore(bar): add src
  - <code>[74cd554](https://github.com/muravjev/monorepo/commit/74cd554)</code> - chore(bar): setup jest-ts-react
  - <code>[04c5b8f](https://github.com/muravjev/monorepo/commit/04c5b8f)</code> - chore(bar): add tests

- [Create app next foo](https://github.com/muravjev/monorepo/pull/4)

  - <code>[736b582](https://github.com/muravjev/monorepo/commit/736b582)</code> - chore(foo): create next ts app
  - <code>[a794ede](https://github.com/muravjev/monorepo/commit/a794ede)</code> - chore(foo): cleanup
  - <code>[692f184](https://github.com/muravjev/monorepo/commit/692f184)</code> - chore(foo): separate src
  - <code>[9e61382](https://github.com/muravjev/monorepo/commit/9e61382)</code> - chore(foo): add scripts
  - <code>[a6046ba](https://github.com/muravjev/monorepo/commit/a6046ba)</code> - chore(foo): setup ts-next
  - <code>[9759d36](https://github.com/muravjev/monorepo/commit/9759d36)</code> - chore(foo): setup eslint-ts-next

## Donation

<!-- prettier-ignore-start -->

| If you found this project helpful, consider |
| :---: |
[**buying me a coffee**](https://www.buymeacoffee.com/muravjev), [**donate by paypal**](https://www.paypal.me/muravjev) or just [**leave a star**](../..)⭐
Thanks for your support, it is much appreciated!

<!-- prettier-ignore-end -->

## License

[MIT](LICENSE) © [Sergey Muravjev](https://github.com/muravjev)
