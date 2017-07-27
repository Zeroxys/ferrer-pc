<?php

namespace App\Http\Controllers;

use App\Producto;
use App\Brand;
use Illuminate\Http\Request;

class AdministratorController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:administrator');
    }

    public function index()
    {
        
        $products = Producto::latest()->paginate(10);
        $brands = Brand::all();

        return view('administrator.dashboard', [
           'products' => $products,
           'brands'    => $brands,
        ]);
    }

    public function addProduct(Request $request)
    {
        $archivo = $request->file('image');
        $nombre_original = $archivo->getClientOriginalName();
        $save = $archivo->store('uploads', 'public');
        $ruta  =  'storage/'.$save;

        $productos = Producto::create([
            'code' => $request->code,
            'name' => $request->name,
            'category' =>  $request->category,
            'brand_id' => $request->brand,
            'sub_category' => $request->sub_category,
            'cost_public' => $request->cost_public,
            'cost_middle_distributor' => $request->cost_middle_distributor,
            'cost_distributor' => $request->cost_distributor,
            'reduction_public' => $request->reduction_public,
            'reduction_middle_distributor' => $request->reduction_middle_distributor, 
            'reduction_distributor' => $request->reduction_distributor,
            'stock' => $request->stock,
            'description' => $request->description,
            'image' => $ruta,
            'status' => $request->status
        ]); 
        return redirect('/admin/'); 
    }

    public function getProduct(Producto $product)
    {
       print($product); 
    } 

    public function editProduct(Producto $product)
    {

       $brands = Brand::all();

       //$brandSelect = Brand::where('id', $product->id)->get();
       $brandSelect = Brand::find($product->brand_id);

        return view('administrator.viewAdmin.editProduct',[ 
            'product'   => $product,
            'brands'    => $brands,
            'brandSelect' => $brandSelect
        ]);
    
    }

    public function updateProduct(Request $request)
    {
        Producto::where('id', $request->id)
            ->update([
                'code' => $request->code,
                'name' => $request->name,
                'brand_id'=> $request->brand,
                'category' =>  $request->category,
                'sub_category' => $request->sub_category,
                'cost_public' => $request->cost_public,
                'cost_middle_distributor' => $request->cost_middle_distributor,
                'cost_distributor' => $request->cost_distributor,
                'reduction_public' => $request->reduction_public,
                'reduction_middle_distributor' => $request->reduction_middle_distributor, 
                'reduction_distributor' => $request->reduction_distributor,
                'stock' => $request->stock,
                'description' => $request->description,
                'image' => $request->image,
                'status' => $request->status
            ]);

        return redirect('/admin/');
    }

    public function deleteProduct(Producto $product)
    {
        Producto::where('id', $product->id)->delete();
        return redirect('/admin/');
    }

    public function searchP(Request $request)
    {
        $Product = new Producto();
        return $Product->search($request->serch);        
    }
}