<p align="center">
  <a href="https://www.npmjs.com/package/sw-legion-data">
    <img alt="npm version" src="https://img.shields.io/npm/v/sw-legion-data.svg?style=flat-square"></a>
</p>

# Legion Data
An easy-to-use collection of all data from [Star Wars: Legion miniatures game](https://www.fantasyflightgames.com/en/products/star-wars-legion/) by [Fantasy Flight Games](http://fantasyflightgames.com/).

## What's included

This repository contains data for the following components:
- Units
- Upgrades
- Keywords
- Typed data for Typescript
- Structure for shared save format (see `types/ldf`)

## Usage

You can use this data to build your own apps, army builders, web sites, etc.

The easiest way to do this is via [Yarn](https://yarnpkg.com/), [npm](https://www.npmjs.com/package/legion-data)

* Yarn: `yarn add sw-legion-data`
* npm: `npm install sw-legion-data`

## Bugs / Issues

Please [open a ticket](https://github.com/zacharyp/sw-legion-data/issues/new) on Github.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-awesome-feature`
3. Commit your changes: `git commit -am 'Add some awesome feature'`
4. Push to the branch: `git push origin my-awesome-feature`
5. Submit a pull request :tada:

## Versioning

This project uses [SemVer](http://semver.org/). Given a `MAJOR.MINOR.PATCH` version number, we will increment the:
- `MAJOR` version when existing content is changed in such a way that it can break consumers of the data
- `MINOR` version when new content is added in a backwards-compatible manner, or existing content is changed in a backwards-compatible manner
- `PATCH` version when fixing mistakes in existing content

## History

See the [Releases tab](https://github.com/andrelind/legion-data/releases) in Github.

## Contributors

Originally a fork of https://github.com/andrelind/legion-data, but with the switch from Flow to Typescript, this is now its own project.

Special thanks to the following original contributors to legion-data project:

- André Lind (andre@lindapp.se)
- Steve Good (sgood@lanctr.com)

## License
MIT

---

Star Wars, Star Wars: Legion and all related properties and text are owned by Fantasy Flight Games, Lucasfilm Ltd., and/or Disney.
