
require 'rubygems'
require 'rack'

use Rack::Static, urls: { '/' => 'index.html' }
