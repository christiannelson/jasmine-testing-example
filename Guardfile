# A sample Guardfile
# More info at https://github.com/guard/guard#readme

spec_location = "spec/javascripts/%s_spec"

guard 'jasmine-headless-webkit' do
  watch(%r{javascripts/vendor})      { 'spec/javascripts' }
  watch(%r{app/javascripts})         { 'spec/javascripts' }
  watch(%r{spec/javascripts})        { 'spec/javascripts' }
  # watch(%r{^public/javascripts/(.*)\.js$}) { |m| newest_js_file(spec_location % m[1]) }
  # watch(%r{^javascripts/assets/javascripts/(.*)\.(js|coffee)$}) { |m| newest_js_file(spec_location % m[1]) }
  # watch(%r{^spec/javascripts/(.*)_spec\..*}) { |m| newest_js_file(spec_location % m[1]) }
end

