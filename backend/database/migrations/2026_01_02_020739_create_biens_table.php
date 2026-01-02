<?php

use App\Models\Agency;
use App\Models\Devise;
use App\Models\TransactionType;
use App\Models\type as ModelsType;
use App\Models\TypeBien;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('biens', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Agency::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(TypeBien::class);
            $table->string('title');
            $table->text('description');
            $table->double('surface');
            $table->integer('rooms');
            $table->integer('bedrooms');
            $table->integer('floor')->nullable();
            $table->boolean('furnished')->default(false);
            $table->double('price');
            $table->foreignIdFor(Devise::class);
            $table->foreignIdFor(TransactionType::class);
            $table->string('address');
            $table->string('country');
            $table->string('region');
            $table->string('city');
            $table->string('postal_code')->nullable();
            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();
            $table->boolean('is_available')->default(true);
            $table->timestamp('archived_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('biens');
    }
};