ActiveRecord::Schema.define(version: 20171118083132) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attendances", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "event_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cities", force: :cascade do |t|
    t.string   "name"
    t.string   "city_code",          limit: 3
    t.text     "description"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "events", force: :cascade do |t|
    t.string   "address",                 null: false
    t.string   "description"
    t.integer  "city_id",                 null: false
    t.integer  "host_id",                 null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.integer  "spots",       default: 5
    t.datetime "date"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                             null: false
    t.string   "first_name",                        null: false
    t.string   "password_digest",                   null: false
    t.string   "session_token",                     null: false
    t.string   "last_name"
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.boolean  "is_host",            default: true
    t.integer  "city_id"
    t.string   "city_code"
    t.string   "city_name"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
