#!/bin/bash

package_json=$(cat package.json)

current_version=$(echo "$package_json" | jq -r '.version')

current_x=$(echo "$current_version" | awk -F. '{print $3}')

new_x=$((current_x + 1))

new_version=$(echo "$current_version" | awk -F. -v x="$new_x" '{$3 = x; print}' OFS='.')

modified_package_json=$(echo "$package_json" | jq --arg new_version "$new_version" '.version = $new_version')

echo "$modified_package_json" > package.json

echo "package.json has been modified. Old version: $current_version, new version: $new_version."